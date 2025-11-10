package com.example.ecommerce.service;

import com.example.ecommerce.dto.CustomerRegistrationRequest;
import com.example.ecommerce.dto.CustomerResponse;
import java.util.List;

public interface CustomerService {
    CustomerResponse register(CustomerRegistrationRequest request);

    CustomerResponse update(Long id, CustomerRegistrationRequest request);

    CustomerResponse getById(Long id);

    List<CustomerResponse> findAll();

    void delete(Long id);
}
