package com.hcl.microservice;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication

public class UserMicroservicesT7Application {
  
	
	
	// MAIN METHOD
	public static void main(String[] args) {
		SpringApplication.run(UserMicroservicesT7Application.class, args);
	}
	
	@Bean
	public RestTemplate getRestTemplate() {
		return  new RestTemplate();
	}


}
