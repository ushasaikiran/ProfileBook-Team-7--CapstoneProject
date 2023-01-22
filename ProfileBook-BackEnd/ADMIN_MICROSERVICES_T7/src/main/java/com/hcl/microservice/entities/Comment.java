package com.hcl.microservice.entities;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class Comment {

	@Id
	 private long postId;
	
	
	 private String userName;
	 
	 private String comment;
	 
	 
	 

	public Comment() {
		super();
	}




	public Comment(long postId, String comment, String userName) {
		super();
		this.postId = postId;
		this.comment = comment;
		this.userName = userName;
	}




	public long getPostId() {
		return postId;
	}




	public void setPostId(long postId) {
		this.postId = postId;
	}




	public String getComment() {
		return comment;
	}




	public void setComment(String comment) {
		this.comment = comment;
	}




	public String getUserName() {
		return userName;
	}




	public void setUserName(String userName) {
		this.userName = userName;
	}




	@Override
	public String toString() {
		return "Comment [postId=" + postId + ", comment=" + comment + ", userName=" + userName + "]";
	}
	 
	 
	 

	 
	 

}
