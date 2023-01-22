package com.hcl.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.microservice.entities.Admin;



@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
	
    // FIND BY ADMIN NAME	
	public Admin findAdminByAdminName(String adminName);
}
