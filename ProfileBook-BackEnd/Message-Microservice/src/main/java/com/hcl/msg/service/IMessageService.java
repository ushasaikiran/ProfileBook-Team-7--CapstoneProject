package com.hcl.msg.service;

import com.hcl.msg.dto.MessageDTO;

import com.hcl.msg.entity.Message;

public interface IMessageService {
	
	
	//Crud on Message
	public Message addMessage(MessageDTO msgDto);
	
	public Message getMessageById(long msgId);
	
	public String deleteMessageById(long msgId);

}
