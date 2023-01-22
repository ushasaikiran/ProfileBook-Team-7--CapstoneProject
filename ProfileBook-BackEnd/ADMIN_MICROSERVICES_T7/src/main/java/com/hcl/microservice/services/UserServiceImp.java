package com.hcl.microservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hcl.microservice.dto.CommentDTO;
import com.hcl.microservice.dto.Message;
import com.hcl.microservice.dto.PostDTO;
import com.hcl.microservice.entities.Comment;
import com.hcl.microservice.entities.Post;
import com.hcl.microservice.entities.User;
import com.hcl.microservice.exceptions.PostNotFoundException;
import com.hcl.microservice.exceptions.UserNotFoundException;
import com.hcl.microservice.repositories.CommentRepository;
import com.hcl.microservice.repositories.PostRepository;
import com.hcl.microservice.repositories.UserRepository;
import com.hcl.microservice.vo.UserMessageVO;

@Service
public class UserServiceImp implements IUserService {

	
	@Autowired
	UserRepository userRepo;   // USER REPOSITORY
	
	@Autowired
	PostRepository postRepo;   // POST REPOSITORY
	
	
	@Autowired
	CommentRepository commentRepo; // COMMENT REPOSITORY
	
	
	@Autowired
	RestTemplate restTemplate;

	@Override
	public ResponseEntity<String> registerUser(User user) {
	ResponseEntity<String> response = null;
		
		User user1 =  userRepo.save(user);
		
		if(user1!=null) {
			response = new ResponseEntity<String>("User Registration Success",HttpStatus.ACCEPTED);
			
		}else {
			
			response = new ResponseEntity<String>("User Registration Failed!",HttpStatus.NOT_ACCEPTABLE);
		}
		return response;
		
	}
	@Override
    public User getUserByUserName(String userName)throws UserNotFoundException{
        int count = 0;
        if (count == 0) {

 

            try {
                throw new UserNotFoundException();
            } catch (UserNotFoundException e) {
                System.err.println("UserNotFound");
            }
        }

 

        return userRepo.findUserByUserName(userName);
    }
	

	@Override
	public Post addPost(PostDTO postDto) {
		
		Post post = new Post();
		post.setPostId(postDto.getPostId());
		post.setPostName(postDto.getPostName());
		post.setUserName(postDto.getUserName());
		post.setPostImageUrl(postDto.getPostImageUrl());
		post.setPostHashtag(postDto.getPostHashtag());
		post.setPostDescription(postDto.getPostDescription());
		return  postRepo.save(post);
		
		
	}

	@Override
	public String deletePostById(long postId) {
//		

		postRepo.deleteById(postId);
	
		
		
		
		
		return "Post Deleted Successfully";
		}
		
//		 postRepo.deleteById(postId);
//		return "Post Deleted Successfully";
	

	@Override
	public List<Post> getPost(PostDTO postDto)  {


        return postRepo.findAll();
    }
	
	

	@Override
	public Comment addComment(CommentDTO commentDto) {
		// TODO Auto-generated method stub
		
		Comment comment = new Comment();
		comment.setPostId(commentDto.getPostId());
	
		comment.setUserName(commentDto.getUserName());
		comment.setComment(commentDto.getComment());
	
		return  commentRepo.save(comment); 
	}

	

	@Override
	public String deleteCommentById(long postId) {
		// TODO Auto-generated method stub
		commentRepo.deleteById(postId);
		
		return "Comment Deleted";
	}
	

	@Override
	public List<Comment> displayComment(CommentDTO commentDto) {
		// TODO Auto-generated method stub
		return commentRepo.findAll();
	}
	
	@Override
	public User getUserById(long userId) {
		// TODO Auto-generated method stub
		return userRepo.findById(userId).orElse(null);
		
	}
	
	
	
	@Override
	public UserMessageVO getUserByIdWithMessage(long userId) {
		// TODO Auto-generated method stub

        User user = getUserById(userId);

        long msgId = user.getMsgId();

        Message msg = restTemplate.getForObject("http://localhost:8003/api/Message/getMsg/" + msgId, Message.class);

        UserMessageVO    userMessageVO = new UserMessageVO(user, msg);

        return userMessageVO;
    }
	@Override
	public Post updatePost(PostDTO postDto) {
		// TODO Auto-generated method stub
		
		Post post = new Post();
		post.setPostId(postDto.getPostId());
		post.setPostName(postDto.getPostName());
		post.setUserName(postDto.getUserName());
		post.setUserPassword(postDto.getUserPassword());
		post.setPostImageUrl(postDto.getPostImageUrl());
		post.setPostHashtag(postDto.getPostHashtag());
		post.setPostDescription(postDto.getPostDescription());
		return  postRepo.save(post);
	}
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
