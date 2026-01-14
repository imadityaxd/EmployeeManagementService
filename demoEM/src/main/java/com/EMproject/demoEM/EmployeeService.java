// Defines the package for the service layer
package com.EMproject.demoEM;

// Java utility for handling collections
import java.util.List;

// Service interface acts as a contract between Controller and Service Implementation
// It contains business operation method declarations
public interface EmployeeService {

     // Creates a new employee
     // Accepts Employee model object and returns operation status message
     String createEmployee(Employee employee);

     // Fetches all employees
     // Returns list of Employee model objects
     List<Employee> readEmployees();

     // Deletes an employee using unique ID
     // Returns true if deletion is successful, otherwise false
     boolean deleteEmployee(Long id);

     // Updates employee details for a given ID
     // Returns status message after update
     String updateEmployee(Long id, Employee employee);

     // Fetches a single employee by ID
     // Returns Employee object if found
     Employee readEmployee(Long id);
}
