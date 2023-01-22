package com.hcl.microservice.restcontrollers;

import java.util.List;



import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.microservice.dto.AdminDTO;
import com.hcl.microservice.dto.PostDTO;
import com.hcl.microservice.dto.UserDTO;
import com.hcl.microservice.dto.UserGroupDTO;
import com.hcl.microservice.entities.Admin;
import com.hcl.microservice.entities.Post;
import com.hcl.microservice.entities.User;
import com.hcl.microservice.entities.UserGroup;
import com.hcl.microservice.exceptions.AdminNotFoundException;
import com.hcl.microservice.exceptions.PostNotFoundException;
import com.hcl.microservice.services.IAdminService;
import com.hcl.microservice.services.IUserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminRestController {
	
	@Autowired
	IAdminService adminService;  //ADMIN SERVICES
	
	@Autowired
	IUserService userService;    //USER SERVICES
	
	
     
	//ADD USER BY ADMIN
	@PostMapping("/addUser")
	public User add(@RequestBody UserDTO userDto){
		
		return adminService.addUser(userDto);
		
		
	}
	
	// UPDATE USER BY ADMIN
	@PutMapping("/updateUser")
	public User update(@RequestBody UserDTO userDto) {
		
		return adminService.updateUser(userDto);
		
	}
	
	
	// DELETE USER BY ADMIN
	@DeleteMapping("/deleteUser/{userId}")
	public String deleteById(@PathVariable long userId) {
		
		return adminService.deleteUserById(userId);
	}

	// GET USER BY ADMIN
	@GetMapping("/getUserById/{userId}")
	public User getById(@PathVariable long userId) {
		
		return adminService.getUserById(userId);
	}
	
	
	//GET ALL USERS BY ADMIN
	@GetMapping("/getAllUsers")
	public List<User> getAll(UserDTO userDto){
		
		return adminService.displayUser(userDto);
		
		
	}
	

	
        // ADMIN REGISTRATION	
	 @PostMapping("/register")
		public ResponseEntity<String> register(@RequestBody Admin admin){
			
			return adminService.registerAdmin(admin);
			
		}
		
	 // LOGIN BY ADMIN
		@GetMapping("/login/{adminName}/{adminPassword}")
		public ResponseEntity<String> login(@PathVariable String adminName,@PathVariable String adminPassword,HttpSession session)
		throws AdminNotFoundException{
			
			Admin admin =  adminService.getAdminByAdminName(adminName);
		
			
			ResponseEntity<String> response = null;
			
			if(admin.getAdminName().equals(adminName)&& admin.getAdminPassword().equals(adminPassword)){
				
				session.setAttribute("adminName", adminName);
				session.setAttribute("adminPassword", adminPassword);
				
				
				response = new ResponseEntity<String>("Login Success!",HttpStatus.OK);
			}
			else {
				
				response = new ResponseEntity<String>("Login Failed!", HttpStatus.BAD_REQUEST);
			}
			return response;
			
		}
		
		
		
       
		@GetMapping("/getadmins")
		public List<Admin> displayAllAdmins(AdminDTO adminDto){
			
			return adminService.displayAllAdmins(adminDto);
			
		}
		
		
		
		
        @PostMapping("/createGroup") 
		public UserGroup  createGroup(@RequestBody UserGroupDTO userGroupDto) {
			return adminService.createGroup(userGroupDto);
			
		}
		
		@DeleteMapping("/deleteGroupById/{groupId}")
		public String deleteGroupById(@PathVariable Long groupId) {
			return adminService.deleteGroupById(groupId);
			
		}
		
		@GetMapping("/displayGroups")
		public List<UserGroup> DisplayAllGroups(UserGroupDTO userGroupDto){
			return adminService.DisplayAllGroups(userGroupDto);
			
			
		}
		
		
        // ADD POST BY ADMIN
		@PostMapping("/addPost")
		public Post addPost(@RequestBody PostDTO postDto) {
			return userService.addPost(postDto);
			
		}
		
		   // UPDATE POST BY ADMIN
		@PutMapping("/updatePost")
		public Post updatePost(@RequestBody PostDTO postDto) {
			
			return userService.updatePost(postDto);
			
		}
		 
		
		   // DELETE POST BY ADMIN
		@DeleteMapping("/deletePostById/{postId}")
		public String deletePostById(@PathVariable long postId) throws PostNotFoundException {
			return userService.deletePostById(postId);
			
		}
		
		   // GET ALL POSTS BY ADMIN
		@GetMapping("/getPosts")
		public List<Post> getPost(PostDTO postDto) {
			return userService.getPost(postDto);
			
		}
		
	
		
		   // LOGOUT BY ADMIN
		@GetMapping("/logout")
	    public String logout(HttpSession session) {

	 

	        session.invalidate();

	 

	        return "Logout Success";

	 

	    }
	
	
	
	
}
