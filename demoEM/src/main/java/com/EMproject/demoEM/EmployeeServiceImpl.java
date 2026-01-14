// Defines the package for service implementation
package com.EMproject.demoEM;

// Utility class for copying properties between objects
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// @Service
// Marks this class as Service layer component
// Contains business logic and communicates with Repository layer
@Service
public class EmployeeServiceImpl implements EmployeeService {

    // Injects EmployeeRepository bean
    // Used to perform database operations
    @Autowired
    private EmployeeRepository employeeRepository;

    // ❌ Old in-memory storage approach (not used now)
    // Replaced by database persistence
    List<Employee> employees = new ArrayList<>();

    // Creates a new employee record
    // Converts Employee (Model) → EmployeeEntity (Entity)
    // Saves entity to database
    @Override
    public String createEmployee(Employee employee) {

        // Creating entity object
        EmployeeEntity employeeEntity = new EmployeeEntity();

        // Copies matching fields from model to entity
        BeanUtils.copyProperties(employee, employeeEntity);

        // Persists entity into database
        employeeRepository.save(employeeEntity);

        return "Saved Successfully";
    }

    // Fetches a single employee by ID
    // Converts Entity → Model before returning
    @Override
    public Employee readEmployee(Long id) {

        // Fetches entity from database
        EmployeeEntity employeeEntity =
                employeeRepository.findById(id).get();

        // Creating model object
        Employee employee = new Employee();

        // Copying entity data to model
        BeanUtils.copyProperties(employeeEntity, employee);

        return employee;
    }

    // Fetches all employees
    // Converts list of Entity objects → list of Model objects
    @Override
    public List<Employee> readEmployees() {

        // Fetching all employee entities from database
        List<EmployeeEntity> employeesList =
                employeeRepository.findAll();

        // List to store converted Employee models
        List<Employee> employees = new ArrayList<>();

        // Manual mapping from Entity to Model
        for (EmployeeEntity employeeEntity : employeesList) {

            Employee emp = new Employee();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setPhone(employeeEntity.getPhone());

            employees.add(emp);
        }
        return employees;
    }

    // Deletes employee record by ID
    @Override
    public boolean deleteEmployee(Long id) {

        // Fetching entity to be deleted
        EmployeeEntity emp =
                employeeRepository.findById(id).get();

        // Deleting record from database
        employeeRepository.delete(emp);

        return true;
    }

    // Updates employee details for a given ID
    @Override
    public String updateEmployee(Long id, Employee employee) {

        // Fetch existing entity from database
        EmployeeEntity existingEmployee =
                employeeRepository.findById(id).get();

        // Updating fields
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setName(employee.getName());
        existingEmployee.setPhone(employee.getPhone());

        // Saving updated entity
        employeeRepository.save(existingEmployee);

        return "Update Successfully";
    }
}
