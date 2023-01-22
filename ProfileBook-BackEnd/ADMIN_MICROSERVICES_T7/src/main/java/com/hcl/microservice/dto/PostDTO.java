package com.hcl.microservice.dto;

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
public class PostDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	private long postId;
	private String postName;
	private String userName;
	private String userPassword;
	private String postImageUrl;
	private String postDescription;
	private String postHashtag;
	
	
	public PostDTO() {
		super();
	}
 
	
	
    





	public PostDTO(long postId, String postName, String userName, String userPassword, String postImageUrl,
			String postDescription, String postHashtag) {
		super();
		this.postId = postId;
		this.postName = postName;
		this.userName = userName;
		this.userPassword = userPassword;
		this.postImageUrl = postImageUrl;
		this.postDescription = postDescription;
		this.postHashtag = postHashtag;
	}





	public long getPostId() {
		return postId;
	}


	public void setPostId(long postId) {
		this.postId = postId;
	}


	public String getPostName() {
		return postName;
	}


	public void setPostName(String postName) {
		this.postName = postName;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPostImageUrl() {
		return postImageUrl;
	}


	public void setPostImageUrl(String postImageUrl) {
		this.postImageUrl = postImageUrl;
	}


	public String getPostDescription() {
		return postDescription;
	}


	public void setPostDescription(String postDescription) {
		this.postDescription = postDescription;
	}


	public String getPostHashtag() {
		return postHashtag;
	}


	public void setPostHashtag(String postHashtag) {
		this.postHashtag = postHashtag;
	}

	

	public String getUserPassword() {
		return userPassword;
	}





	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}





	@Override
	public String toString() {
		return "Post [postId=" + postId + ", postName=" + postName + ", userName=" + userName + ", userPassword="
				+ userPassword + ", postImageUrl=" + postImageUrl + ", postDescription=" + postDescription
				+ ", postHashtag=" + postHashtag + "]";
	}

	
	
	

}
