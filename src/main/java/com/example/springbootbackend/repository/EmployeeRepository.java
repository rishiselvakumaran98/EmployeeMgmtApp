package com.example.springbootbackend.repository;

import com.example.springbootbackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByEmailId(String emailId);
}
