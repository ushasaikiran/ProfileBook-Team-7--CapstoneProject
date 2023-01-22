package com.hcl.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.microservice.entities.UserGroup;


@Repository
public interface UserGroupRepository extends JpaRepository<UserGroup, Long> {

}
