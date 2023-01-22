package com.hcl.microservice.services;

import java.util.List;

import com.hcl.microservice.dto.ReportedUserDTO;
import com.hcl.microservice.entities.ReportedUser;

public interface IReportedService {
	
	
	//Crud on Reported User
	public ReportedUser addReportedUser(ReportedUserDTO reportedDto);
	

	public String deleteReportedUserById(long reportId);
	
	
	public List<ReportedUser> getReportedUser(ReportedUserDTO reportedDto);
	

}
