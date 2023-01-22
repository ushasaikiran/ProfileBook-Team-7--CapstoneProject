package com.hcl.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


import com.hcl.microservice.entities.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	 
	// FIND BY USER NAME
	
	public User findUserByUserName(String userName);
	
	
}

