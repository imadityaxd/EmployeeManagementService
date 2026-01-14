// Defines the package for the repository layer
package com.EMproject.demoEM;

// Spring Data JPA repository support
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// @Repository
// Marks this interface as a Repository (DAO layer)
// Enables exception translation for database-related errors
@Repository
public interface EmployeeRepository 
        extends JpaRepository<EmployeeEntity, Long> {

    // Custom Query Method
    // Spring Data JPA automatically generates the query based on method name
    // Finds all EmployeeEntity records matching the given name
    List<EmployeeEntity> findByName(String name);
}
