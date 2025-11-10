package com.example.ecommerce.mapper;

import com.example.ecommerce.domain.Customer;
import com.example.ecommerce.domain.CustomerProfile;
import com.example.ecommerce.dto.CustomerRegistrationRequest;
import com.example.ecommerce.dto.CustomerResponse;

public final class CustomerMapper {

    private CustomerMapper() {
    }

    public static Customer toEntity(CustomerRegistrationRequest request) {
        Customer customer = new Customer();
        customer.setEmail(request.email());
        customer.setPassword(request.password());
        customer.setFirstName(request.firstName());
        customer.setLastName(request.lastName());
        customer.setProfile(toProfile(request));
        return customer;
    }

    public static void updateEntity(Customer customer, CustomerRegistrationRequest request) {
        customer.setFirstName(request.firstName());
        customer.setLastName(request.lastName());
        customer.setProfile(toProfile(request));
    }

    public static CustomerResponse toResponse(Customer customer) {
        CustomerProfile profile = customer.getProfile();
        return new CustomerResponse(
                customer.getId(),
                customer.getEmail(),
                customer.getFirstName(),
                customer.getLastName(),
                profile != null ? profile.getPhone() : null,
                profile != null ? profile.getAddressLine1() : null,
                profile != null ? profile.getAddressLine2() : null,
                profile != null ? profile.getCity() : null,
                profile != null ? profile.getState() : null,
                profile != null ? profile.getPostalCode() : null,
                profile != null ? profile.getCountry() : null);
    }

    private static CustomerProfile toProfile(CustomerRegistrationRequest request) {
        CustomerProfile profile = new CustomerProfile();
        profile.setPhone(request.phone());
        profile.setAddressLine1(request.addressLine1());
        profile.setAddressLine2(request.addressLine2());
        profile.setCity(request.city());
        profile.setState(request.state());
        profile.setPostalCode(request.postalCode());
        profile.setCountry(request.country());
        return profile;
    }
}
