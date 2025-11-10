package com.example.ecommerce.mapper;

import com.example.ecommerce.domain.CustomerOrder;
import com.example.ecommerce.domain.OrderItem;
import com.example.ecommerce.dto.OrderItemResponse;
import com.example.ecommerce.dto.OrderResponse;
import java.util.Set;
import java.util.stream.Collectors;

public final class OrderMapper {

    private OrderMapper() {
    }

    public static OrderResponse toResponse(CustomerOrder order) {
        Set<OrderItemResponse> itemResponses = order.getItems().stream()
                .map(OrderMapper::toItemResponse)
                .collect(Collectors.toSet());
        return new OrderResponse(
                order.getId(),
                CustomerMapper.toResponse(order.getCustomer()),
                order.getTotalAmount(),
                order.getStatus(),
                order.getPlacedAt(),
                itemResponses);
    }

    private static OrderItemResponse toItemResponse(OrderItem item) {
        return new OrderItemResponse(
                item.getId(),
                ProductMapper.toResponse(item.getProduct()),
                item.getQuantity(),
                item.getLineTotal());
    }
}
