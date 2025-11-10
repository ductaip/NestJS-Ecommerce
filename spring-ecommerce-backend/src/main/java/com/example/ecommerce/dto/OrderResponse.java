package com.example.ecommerce.dto;

import com.example.ecommerce.domain.OrderStatus;
import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.Set;

public record OrderResponse(
        Long id,
        CustomerResponse customer,
        BigDecimal totalAmount,
        OrderStatus status,
        OffsetDateTime placedAt,
        Set<OrderItemResponse> items
) {}
