package com.hcl.microservice.vo;



import com.hcl.microservice.dto.Message;
import com.hcl.microservice.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class UserMessageVO {

	
	private User user;
	private Message msg;
	
	public UserMessageVO() {
		super();
	}
	public UserMessageVO(User user, Message msg) {
		super();
		this.user = user;
		this.msg = msg;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Message getMsg() {
		return msg;
	}
	public void setMsg(Message msg) {
		this.msg = msg;
	}
	@Override
	public String toString() {
		return "UserMessageVO [user=" + user + ", msg=" + msg + "]";
	}
	
	
	
	
}
