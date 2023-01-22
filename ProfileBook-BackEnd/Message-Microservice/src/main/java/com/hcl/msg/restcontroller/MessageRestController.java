package com.hcl.msg.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.msg.dto.MessageDTO;
import com.hcl.msg.entity.Message;
import com.hcl.msg.service.IMessageService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api/Message")
public class MessageRestController {
	
	@Autowired
	IMessageService msgService;
	
	
	@PostMapping("/addMsg")
	public Message addMessage(@RequestBody MessageDTO msgDto) {
		
		return msgService.addMessage(msgDto);
		
	}
	
	@GetMapping("/getMsg/{msgId}")
	public Message getMessageById(@PathVariable long msgId) {
		
		return msgService.getMessageById(msgId);
	}
	
	@DeleteMapping("/deleteMsg/{msgId}")
	public String deleteMessageById(  @PathVariable long msgId) {
		
		return msgService.deleteMessageById(msgId);
		
	}

}
