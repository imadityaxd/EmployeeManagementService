// Defines the package for the Employee entity
package com.EMproject.demoEM;

// JPA annotations for ORM (Object Relational Mapping)
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

// @Data
// Generates getters, setters, toString(), equals(), and hashCode()
@Data

// @Entity
// Marks this class as a JPA entity
// This class will be mapped to a database table
@Entity

// @Table
// Specifies the table name in the database
@Table(name = "emp_db")
public class EmployeeEntity {

    // @Id
    // Marks this field as the primary key of the table
    @Id

    // @GeneratedValue
    // Automatically generates primary key values
    // GenerationType.IDENTITY uses database auto-increment
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Maps to a column 'name' in emp_db table
    private String name;

    // Maps to a column 'phone' in emp_db table
    private String phone;

    // Maps to a column 'email' in emp_db table
    private String email;
}
