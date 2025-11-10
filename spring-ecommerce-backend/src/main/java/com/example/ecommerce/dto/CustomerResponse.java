package com.example.ecommerce.dto;

public record CustomerResponse(
        Long id,
        String email,
        String firstName,
        String lastName,
        String phone,
        String addressLine1,
        String addressLine2,
        String city,
        String state,
        String postalCode,
        String country
) {}
