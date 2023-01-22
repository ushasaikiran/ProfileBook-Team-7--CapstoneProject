package com.hcl.msg.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity

@Table(name="messages")
public class Message {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long msgId;
	private String msgSenderName;
	private String msgReceiverName;
	private String msgText;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date dateAndTime;

	public Message() {
		super();
	}

	public Message(long msgId, String msgSenderName, String msgReceiverName, String msgText, Date dateAndTime) {
		super();
		this.msgId = msgId;
		this.msgSenderName = msgSenderName;
		this.msgReceiverName = msgReceiverName;
		this.msgText = msgText;
		this.dateAndTime = dateAndTime;
	}

	public long getMsgId() {
		return msgId;
	}

	public void setMsgId(long msgId) {
		this.msgId = msgId;
	}

	public String getMsgSenderName() {
		return msgSenderName;
	}

	public void setMsgSenderName(String msgSenderName) {
		this.msgSenderName = msgSenderName;
	}

	public String getMsgReceiverName() {
		return msgReceiverName;
	}

	public void setMsgReceiverName(String msgReceiverName) {
		this.msgReceiverName = msgReceiverName;
	}

	public String getMsgText() {
		return msgText;
	}

	public void setMsgText(String msgText) {
		this.msgText = msgText;
	}

	public Date getDateAndTime() {
		return dateAndTime;
	}

	public void setDateAndTime(Date dateAndTime) {
		this.dateAndTime = dateAndTime;
	}

	@Override
	public String toString() {
		return "Message [msgId=" + msgId + ", msgSenderName=" + msgSenderName + ", msgReceiverName=" + msgReceiverName
				+ ", msgText=" + msgText + ", dateAndTime=" + dateAndTime + "]";
	}
	
	
	

}
