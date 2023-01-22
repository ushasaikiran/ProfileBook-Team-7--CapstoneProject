
package com.hcl.microservice.dto;
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
public class CommentDTO {

	 
	 private long postId;
	
	 private String comment;

	 private String userName;
	 
	 
	 

	public CommentDTO() {
		super();
	}




	public CommentDTO(long postId, String comment, String userName) {
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
