// Defines the package structure of the application
// Helps in organizing related classes and avoiding naming conflicts
package com.EMproject.demoEM;

// Spring annotations for dependency injection and REST APIs
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// @RestController indicates that this class handles RESTful web services
// It automatically converts returned Java objects into JSON responses
@RestController

// @CrossOrigin enables Cross-Origin Resource Sharing (CORS)
// Allows frontend running on http://localhost:5173 to access these APIs
@CrossOrigin("http://localhost:5173/")
public class EmpController {

    // ❌ Old tightly-coupled approach (commented)
    // Controller directly creating service object is not recommended
    // List<Employee> employees = new ArrayList<>();
    // EmployeeService employeeService = new EmployeeServiceImpl();

    // ✅ Dependency Injection
    // @Autowired injects the EmployeeService bean at runtime
    // Promotes loose coupling and follows Spring best practices
    @Autowired
    private EmployeeService employeeService;

    // Handles HTTP GET requests
    // URL: /employees
    // Returns list of all employees
    @GetMapping("employees")
    public List<Employee> getAllEmployees() {
        return employeeService.readEmployees();
    }

    // Handles HTTP GET request for a specific employee
    // URL: /employees/{id}
    // @PathVariable extracts id from URL
    @GetMapping("employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.readEmployee(id);
    }

    // Handles HTTP POST requests
    // URL: /employees
    // @RequestBody converts incoming JSON to Employee object
    // Used to create a new employee
    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    // Handles HTTP DELETE requests
    // URL: /employees/{id}
    // Deletes employee based on ID
    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        if (employeeService.deleteEmployee(id))
            return "Delete Successfully";
        return "Not Found";
    }

    // Handles HTTP PUT requests
    // URL: /employees/{id}
    // Updates existing employee details
    @PutMapping("employees/{id}")
    public String updateEmployee(@PathVariable Long id,
                                 @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }
}
