package com.example.ecommerce.dto;

public record AuthResponse(
        String token,
        CustomerResponse customer
) {}
