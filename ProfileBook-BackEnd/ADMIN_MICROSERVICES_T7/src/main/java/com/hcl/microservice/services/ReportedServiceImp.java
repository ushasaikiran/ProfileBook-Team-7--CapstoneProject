package com.hcl.microservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.microservice.dto.ReportedUserDTO;
import com.hcl.microservice.entities.ReportedUser;
import com.hcl.microservice.repositories.ReportedUserRepository;

@Service
public class ReportedServiceImp implements IReportedService{
	
	@Autowired
	ReportedUserRepository reportedRepo; //REPORTED USER REPOSITORY

	@Override
	public ReportedUser addReportedUser(ReportedUserDTO reportedDto) {
		
		ReportedUser repoUser = new ReportedUser();
		repoUser.setReportId(reportedDto.getReportId());
		repoUser.setUserName(reportedDto.getUserName());
		repoUser.setEmailId(reportedDto.getEmailId());
		repoUser.setUserMobNo(reportedDto.getUserMobNo());
		repoUser.setReason(reportedDto.getReason());

		
		return reportedRepo.save(repoUser);
	}


	@Override
	public List<ReportedUser> getReportedUser(ReportedUserDTO ReportedDto) {
		
		return reportedRepo.findAll();
	}


	@Override
	public String deleteReportedUserById(long reportId) {
		// TODO Auto-generated method stub
		
		 reportedRepo.deleteById(reportId);
		return "User Reported";
	}

}
