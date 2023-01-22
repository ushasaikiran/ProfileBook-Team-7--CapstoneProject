package com.hcl.microservice.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hcl.microservice.dto.AdminDTO;
import com.hcl.microservice.dto.UserDTO;
import com.hcl.microservice.dto.UserGroupDTO;
import com.hcl.microservice.entities.Admin;
import com.hcl.microservice.entities.User;
import com.hcl.microservice.entities.UserGroup;
import com.hcl.microservice.exceptions.AdminNotFoundException;

public interface IAdminService {

	
	

	// Admin Registration
	public ResponseEntity<String> registerAdmin(Admin admin);
	
	
	//Admin Login
	public Admin getAdminByAdminName(String adminName) throws AdminNotFoundException;
	
	
	
	// CRUD ON USER
	public User addUser(UserDTO userDto);
	
	
	public User updateUser(UserDTO userDto);
	
	
	public String deleteUserById(long userId);
	
	
	public User getUserById(long userId);
	
	
	public List<User> displayUser(UserDTO userDto);
	
	
	public List<Admin> displayAllAdmins(AdminDTO adminDto);
	
	
	
	//Crud On UserGroup 
	public UserGroup  createGroup(UserGroupDTO userGroupDto);
	
	
	public String deleteGroupById(Long groupId);
	
	
	public List<UserGroup> DisplayAllGroups(UserGroupDTO userGroupDto);
	

	
}
