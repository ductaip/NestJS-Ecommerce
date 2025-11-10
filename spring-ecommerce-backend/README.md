# Spring E-commerce Backend

A production-ready Spring Boot backend for an e-commerce platform featuring JWT authentication, PostgreSQL persistence, Flyway migrations, and Swagger documentation.

## Features

- Product, category, customer, and order management APIs.
- JWT-based authentication with secure password hashing.
- PostgreSQL database with Flyway migrations and seed data.
- Dockerized development environment (`docker compose up -d --build`).
- Remote debugging enabled on port `5005`.
- Actuator health endpoints and structured exception handling.

## Getting Started

1. Ensure Docker and Docker Compose are installed.
2. Run the stack:

   ```bash
   docker compose up -d --build
   ```

3. Access the API documentation at [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html).
4. The PostgreSQL service is exposed on port `5432` using the credentials defined in `docker-compose.yml`.

## Local Development

For iterative development without Docker:

```bash
cd spring-ecommerce-backend
mvn spring-boot:run
```

> **Tip:** Remote debugging is enabled via the `JAVA_TOOL_OPTIONS` environment variable when running through Docker.

