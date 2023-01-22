package com.hcl.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.hcl.microservice.entities.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

	
}
