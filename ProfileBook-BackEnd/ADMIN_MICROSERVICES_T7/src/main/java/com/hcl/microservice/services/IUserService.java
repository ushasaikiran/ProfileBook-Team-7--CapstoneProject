package com.hcl.microservice.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hcl.microservice.dto.CommentDTO;
import com.hcl.microservice.dto.PostDTO;
import com.hcl.microservice.entities.Comment;
import com.hcl.microservice.entities.Post;
import com.hcl.microservice.entities.User;
import com.hcl.microservice.exceptions.PostNotFoundException;
import com.hcl.microservice.exceptions.UserNotFoundException;
import com.hcl.microservice.vo.UserMessageVO;


public interface IUserService {
	
	
	
    //Register as User
	public ResponseEntity<String> registerUser(User user);
	
	//Login as a User
	public User getUserByUserName(String userName) throws UserNotFoundException;
	

	// Crud on User Posts
	public Post addPost(PostDTO postDto);
	
	public Post updatePost(PostDTO postDto);
	
	
	public String deletePostById(long postId);
	
	public List<Post> getPost(PostDTO postDto) ;
	
	
	//Crud on Comments
	public Comment addComment(CommentDTO commentDto);
	
	
	public String deleteCommentById(long postId);
	
	
	public List<Comment> displayComment(CommentDTO commentDto);
	
	
	public User  getUserById(long userId);
	
	public UserMessageVO getUserByIdWithMessage(long userId);
	
	
	
	
	

}
