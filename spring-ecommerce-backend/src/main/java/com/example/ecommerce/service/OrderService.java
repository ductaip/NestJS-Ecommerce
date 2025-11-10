package com.example.ecommerce.service;

import com.example.ecommerce.dto.OrderRequest;
import com.example.ecommerce.dto.OrderResponse;
import java.util.List;

public interface OrderService {
    OrderResponse placeOrder(OrderRequest request);

    OrderResponse updateStatus(Long orderId, String status);

    OrderResponse getById(Long orderId);

    List<OrderResponse> getOrdersForCustomer(Long customerId);
}
