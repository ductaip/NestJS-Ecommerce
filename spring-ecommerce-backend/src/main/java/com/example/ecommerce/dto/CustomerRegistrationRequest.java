package com.example.ecommerce.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CustomerRegistrationRequest(
        @Email @NotBlank String email,
        @NotBlank @Size(min = 8, max = 120) String password,
        @NotBlank @Size(max = 150) String firstName,
        @NotBlank @Size(max = 150) String lastName,
        @Size(max = 20) String phone,
        @Size(max = 255) String addressLine1,
        @Size(max = 255) String addressLine2,
        @Size(max = 120) String city,
        @Size(max = 120) String state,
        @Size(max = 20) String postalCode,
        @Size(max = 120) String country
) {}
