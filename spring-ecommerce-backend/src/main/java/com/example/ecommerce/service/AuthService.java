package com.example.ecommerce.service;

import com.example.ecommerce.dto.AuthResponse;
import com.example.ecommerce.dto.CustomerRegistrationRequest;
import com.example.ecommerce.dto.LoginRequest;

public interface AuthService {
    AuthResponse register(CustomerRegistrationRequest request);

    AuthResponse login(LoginRequest request);
}
