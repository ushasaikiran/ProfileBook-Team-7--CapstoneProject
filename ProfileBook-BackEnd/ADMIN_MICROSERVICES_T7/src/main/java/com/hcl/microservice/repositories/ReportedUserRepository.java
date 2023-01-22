/**
 * 
 */
package com.hcl.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.microservice.entities.ReportedUser;


@Repository
public interface ReportedUserRepository extends JpaRepository<ReportedUser, Long> {

}
