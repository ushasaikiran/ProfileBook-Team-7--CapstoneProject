package com.hcl.microservice.entities;

import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;



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
@Entity
public class UserGroup {

	@Id
	private long groupId;

	private long adminId;

	private String groupName;

	
	@OneToOne
	@JoinColumn(name="userId")
	private User user;
	

	public UserGroup() {
		super();
	}
	
	

	public UserGroup(long groupId, long adminId, String groupName, User user) {
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
		return "UserGroup [groupId=" + groupId + ", adminId=" + adminId + ", groupName=" + groupName + ", user=" + user
				+ "]";
	}
}



