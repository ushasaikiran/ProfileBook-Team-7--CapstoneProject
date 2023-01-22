package com.hcl.microservice.entities;

import java.util.List;



import javax.persistence.CascadeType;
import javax.persistence.Entity;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;




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
@Table(name="user_table")
public class User { //USER TABLE
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long userId;
	
	private String userName;
	
	private String userPassword;
	
	private String emailId;

	
	private long userMobNo;
	
	private long msgId;
//	
//	@OneToMany
//	@JoinColumn(name = "userId")
//	List<UserGroup> GroupList;

	public User() {
		super();
	}
public User(long userId, String userName, String userPassword, String emailId, long userMobNo, long msgId) {
	super();
	this.userId = userId;
	this.userName = userName;
	this.userPassword = userPassword;
	this.emailId = emailId;
	this.userMobNo = userMobNo;
	this.msgId = msgId;
}
public long getUserId() {
	return userId;
}
public void setUserId(long userId) {
	this.userId = userId;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getUserPassword() {
	return userPassword;
}
public void setUserPassword(String userPassword) {
	this.userPassword = userPassword;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public long getUserMobNo() {
	return userMobNo;
}
public void setUserMobNo(long userMobNo) {
	this.userMobNo = userMobNo;
}
public long getMsgId() {
	return msgId;
}
public void setMsgId(long msgId) {
	this.msgId = msgId;
}
@Override
public String toString() {
	return "User [userId=" + userId + ", userName=" + userName + ", userPassword=" + userPassword + ", emailId="
			+ emailId + ", userMobNo=" + userMobNo + ", msgId=" + msgId + "]";
}

   


	

}
