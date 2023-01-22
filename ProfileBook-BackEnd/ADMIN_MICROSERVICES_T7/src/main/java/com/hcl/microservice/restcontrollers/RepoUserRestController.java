package com.hcl.microservice.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.microservice.dto.ReportedUserDTO;
import com.hcl.microservice.entities.ReportedUser;
import com.hcl.microservice.services.IReportedService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/reportedUsers")
public class RepoUserRestController {
	
	@Autowired
	IReportedService repoService; // REPORTED SERVICES
	
	
	// ADD REPORTED USER 
	@PostMapping("/addReportedUser")
	public ReportedUser addReportedUser(@RequestBody ReportedUserDTO reportedDto) {
		return repoService.addReportedUser(reportedDto);
		
	}
	
	//GET REPORTED USER
	@GetMapping("/getReportedUser")
	public List<ReportedUser> getReportedUser(ReportedUserDTO reportedDto){
		return repoService.getReportedUser(reportedDto);
		
	}
	
	//DELETE REPORTED USER
	@DeleteMapping("/reportUser/{reportId}")
	public String deleteReportedUserById(@PathVariable long reportId) {

	return repoService.deleteReportedUserById(reportId);
	};
	
	
}
