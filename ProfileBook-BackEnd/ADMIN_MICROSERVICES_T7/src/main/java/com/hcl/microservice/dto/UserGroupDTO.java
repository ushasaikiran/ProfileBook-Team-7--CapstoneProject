package com.hcl.microservice.dto;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.hcl.microservice.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserGroupDTO {

	@Id
	private long groupId;

	private long adminId;

	private String groupName;


	

	
	@OneToOne
	@JoinColumn(name="userId")
	private User user;
	
	
	public UserGroupDTO() {
		super();
	}


	public UserGroupDTO(long groupId, long adminId, String groupName, User user) {
		super();
		this.groupId = groupId;
		this.adminId = adminId;
		this.groupName = groupName;
		this.user = user;
	}


	public long getGroupId() {
		return groupId;
	}


	public void setGroupId(long groupId) {
		this.groupId = groupId;
	}


	public long getAdminId() {
		return adminId;
	}


	public void setAdminId(long adminId) {
		this.adminId = adminId;
	}


	public String getGroupName() {
		return groupName;
	}


	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "UserGroupDTO [groupId=" + groupId + ", adminId=" + adminId + ", groupName=" + groupName + ", user="
				+ user + "]";
	}
	
	
	
}


