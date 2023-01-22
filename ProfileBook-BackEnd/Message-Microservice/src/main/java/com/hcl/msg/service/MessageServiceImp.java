package com.hcl.msg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.msg.dto.MessageDTO;
import com.hcl.msg.entity.Message;
import com.hcl.msg.repository.MessageRepository;

@Service
public class MessageServiceImp implements IMessageService {
	
	@Autowired
	MessageRepository msgRepo;

	@Override
	public Message addMessage(MessageDTO msgDto) {
		
		Message msg = new Message();
		
		msg.setMsgId(msgDto.getMsgId());
		msg.setMsgSenderName(msgDto.getMsgSenderName());
		msg.setMsgReceiverName(msgDto.getMsgReceiverName());
		msg.setMsgText(msgDto.getMsgText());
		msg.setDateAndTime(msgDto.getDateAndTime());
		
		
		return msgRepo.save(msg);
	}

	@Override
	public Message getMessageById(long msgId) {
		
		return msgRepo.findById(msgId).orElse(null);
	}

	@Override
	public String deleteMessageById(long msgId) {
		
		msgRepo.deleteById(msgId);
		
		return "Message Deleted Successfully";
	}

}
