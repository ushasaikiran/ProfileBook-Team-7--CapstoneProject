package com.hcl.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.hcl.microservice.entities.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{

	
	

	
}
