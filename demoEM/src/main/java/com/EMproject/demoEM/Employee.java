// Defines the package where the Employee model belongs
package com.EMproject.demoEM;

// Lombok annotations to reduce boilerplate code
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// @Data
// Generates getters, setters, toString(), equals(), and hashCode() methods
@Data

// @NoArgsConstructor
// Generates a no-argument constructor
// Required by frameworks like Spring and JPA
@NoArgsConstructor

// @AllArgsConstructor
// Generates a constructor with all class fields as parameters
@AllArgsConstructor

// Employee class represents the Model in MVC architecture
// It is a POJO (Plain Old Java Object) used to hold employee data
public class Employee {

    // Unique identifier for an employee
    private Long id;

    // Stores employee name
    private String name;

    // Stores employee phone number
    private String phone;

    // Stores employee email address
    private String email;

}
