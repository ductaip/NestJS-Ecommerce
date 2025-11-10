package com.example.ecommerce.dto;

import java.math.BigDecimal;

public record OrderItemResponse(
        Long id,
        ProductResponse product,
        Integer quantity,
        BigDecimal lineTotal
) {}
