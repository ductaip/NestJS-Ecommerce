package com.example.ecommerce.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;

public record ProductRequest(
        @NotBlank @Size(max = 200) String name,
        @Size(max = 1000) String description,
        @NotNull @Min(0) BigDecimal price,
        @NotNull @Min(0) Integer stock,
        @NotNull Long categoryId
) {}
