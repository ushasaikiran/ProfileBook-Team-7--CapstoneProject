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

import com.hcl.microservice.dto.CommentDTO;
import com.hcl.microservice.dto.PostDTO;
import com.hcl.microservice.dto.UserDTO;
import com.hcl.microservice.entities.Comment;
import com.hcl.microservice.entities.Post;
import com.hcl.microservice.entities.User;
import com.hcl.microservice.exceptions.PostNotFoundException;
import com.hcl.microservice.exceptions.UserNotFoundException;
import com.hcl.microservice.services.IUserService;
import com.hcl.microservice.vo.UserMessageVO;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserRestController {
	
	@Autowired
	IUserService userService;  // USER SERVICES
	
	
     // USER REGISTRATION
	 @PostMapping("/register")
		public ResponseEntity<String> register(@RequestBody User user){
			
			return userService.registerUser(user);
			
		}
		
	 //USER LOGIN
		@GetMapping("/login/{userName}/{userPassword}")
		public ResponseEntity<String> login(@PathVariable String userName,@PathVariable String userPassword,HttpSession session)
		throws UserNotFoundException{
			
			User user =  userService.getUserByUserName(userName);
		
			
			ResponseEntity<String> response = null;
			
			if(user.getUserName().equals(userName)&& user.getUserPassword().equals(userPassword)){
				
				session.setAttribute("userName", userName);
				session.setAttribute("userPassword", userPassword);
				
				
				response = new ResponseEntity<String>("Login Success!",HttpStatus.OK);
			}
			else {
				
				response = new ResponseEntity<String>("Login Failed!", HttpStatus.BAD_REQUEST);
			}
			return response;
			
		}
		

		// GET USER BY USERNAME
		@GetMapping("/getUserByName/{userName}")
		public User getByName(@PathVariable String userName)throws UserNotFoundException {
			
			return userService.getUserByUserName(userName);
		}
		
		
		   // ADD POST BY USER
		@PostMapping("/addPost")
		public Post addPost(@RequestBody PostDTO postDto) {
			return userService.addPost(postDto);
			
		}
		
		   // UPDATE POST BY USER
		@PutMapping("/updatePost")
		public Post updatePost(@RequestBody PostDTO postDto) {
			
			return userService.updatePost(postDto);
			
		}
		
		   // DELETE POST BY USER
		@DeleteMapping("/deletePostById/{postId}")
		public String deletePostById(@PathVariable long postId)  {
			return userService.deletePostById(postId);
			
		}
		
		   // GET ALL  POSTS BY USER
		@GetMapping("/getPosts")
		public List<Post> getPost(PostDTO postDto) {
			return userService.getPost(postDto);
			
		}

		
		
		
		
		@PostMapping("/addComment")
		public Comment addComment(@RequestBody CommentDTO commentDto) {
			return userService.addComment(commentDto);
		}
		
		@DeleteMapping("/deleteComment/{postId}")
		public String deleteCommentById(@PathVariable long postId) {
			
			
			return userService.deleteCommentById(postId);
		}
		
		@GetMapping("/displayComments")
		public List<Comment> displayComment(CommentDTO commentDto){
			return userService.displayComment(commentDto);
			
			
			
		}
		
		
		@GetMapping("/getUserById/{userId}")
		public User  getUserById(@PathVariable long userId) {
			
			return  userService.getUserById(userId);
		}
		
	
		@GetMapping("/getUserByIdWithMessage/{userId}")
		public UserMessageVO getUserByIdWithMessage(@PathVariable long userId) {
			
			return userService.getUserByIdWithMessage(userId);
			
		}
	
		
		// USER LOGOUT
		@GetMapping("/logout")
	    public String logout(HttpSession session) {

	 

	        session.invalidate();

	 

	        return "User Logout Success";

	 

	    }
		
		
		
	
	

}
