package com.example.ecommerce.service.impl;

import com.example.ecommerce.dto.AuthResponse;
import com.example.ecommerce.dto.CustomerRegistrationRequest;
import com.example.ecommerce.dto.LoginRequest;
import com.example.ecommerce.mapper.CustomerMapper;
import com.example.ecommerce.repository.CustomerRepository;
import com.example.ecommerce.service.AuthService;
import com.example.ecommerce.service.CustomerService;
import com.example.ecommerce.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final CustomerService customerService;
    private final CustomerRepository customerRepository;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtService jwtService;

    @Override
    public AuthResponse register(CustomerRegistrationRequest request) {
        var response = customerService.register(request);
        UserDetails userDetails = userDetailsService.loadUserByUsername(response.email());
        String token = jwtService.generateToken(userDetails);
        return new AuthResponse(token, response);
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password()));
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.email());
        String token = jwtService.generateToken(userDetails);
        var customer = customerRepository.findByEmail(request.email())
                .map(CustomerMapper::toResponse)
                .orElseThrow();
        return new AuthResponse(token, customer);
    }
}
