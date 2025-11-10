package com.example.ecommerce.service.impl;

import com.example.ecommerce.domain.Customer;
import com.example.ecommerce.domain.CustomerOrder;
import com.example.ecommerce.domain.OrderItem;
import com.example.ecommerce.domain.OrderStatus;
import com.example.ecommerce.domain.Product;
import com.example.ecommerce.dto.OrderRequest;
import com.example.ecommerce.dto.OrderResponse;
import com.example.ecommerce.exception.BusinessException;
import com.example.ecommerce.exception.ResourceNotFoundException;
import com.example.ecommerce.mapper.OrderMapper;
import com.example.ecommerce.repository.CustomerRepository;
import com.example.ecommerce.repository.OrderRepository;
import com.example.ecommerce.repository.ProductRepository;
import com.example.ecommerce.service.OrderService;
import java.math.BigDecimal;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;

    @Override
    public OrderResponse placeOrder(OrderRequest request) {
        Customer customer = getCustomer(request.customerId());
        CustomerOrder order = new CustomerOrder();
        order.setCustomer(customer);

        Set<OrderItem> items = request.items().stream()
                .map(itemRequest -> {
                    Product product = getProduct(itemRequest.productId());
                    if (product.getStock() < itemRequest.quantity()) {
                        throw new BusinessException("Product %s does not have enough stock".formatted(product.getName()));
                    }
                    product.setStock(product.getStock() - itemRequest.quantity());

                    OrderItem item = new OrderItem();
                    item.setOrder(order);
                    item.setProduct(product);
                    item.setQuantity(itemRequest.quantity());
                    item.setLineTotal(product.getPrice().multiply(BigDecimal.valueOf(itemRequest.quantity())));
                    return item;
                })
                .collect(Collectors.toSet());

        order.setItems(items);
        order.setTotalAmount(items.stream()
                .map(OrderItem::getLineTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add));

        CustomerOrder saved = orderRepository.save(order);
        return OrderMapper.toResponse(saved);
    }

    @Override
    public OrderResponse updateStatus(Long orderId, String status) {
        CustomerOrder order = getOrder(orderId);
        OrderStatus newStatus;
        try {
            newStatus = OrderStatus.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException ex) {
            throw new BusinessException("Invalid order status: " + status);
        }
        order.setStatus(newStatus);
        return OrderMapper.toResponse(order);
    }

    @Override
    @Transactional(readOnly = true)
    public OrderResponse getById(Long orderId) {
        return OrderMapper.toResponse(getOrder(orderId));
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderResponse> getOrdersForCustomer(Long customerId) {
        getCustomer(customerId);
        return orderRepository.findByCustomerId(customerId).stream()
                .map(OrderMapper::toResponse)
                .collect(Collectors.toList());
    }

    private CustomerOrder getOrder(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order", id));
    }

    private Customer getCustomer(Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer", id));
    }

    private Product getProduct(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product", id));
    }
}
