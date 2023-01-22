package com.hcl.msg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.msg.entity.Message;



@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

}
