package com.hcl.microservice.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ReportedUserDTO {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long ReportId;

    private String userName;
	
    private String reason;
	private String emailId;
	
	private long userMobNo;
	public ReportedUserDTO() {
		super();
	}

	public ReportedUserDTO(long reportId, String userName, String reason, String emailId, long userMobNo) {
		super();
		ReportId = reportId;
		this.userName = userName;
		this.reason = reason;
		this.emailId = emailId;
		this.userMobNo = userMobNo;
	}

	public long getReportId() {
		return ReportId;
	}
	public void setReportId(long reportId) {
		ReportId = reportId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
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
	
	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	@Override
	public String toString() {
		return "ReportedUser [ReportId=" + ReportId + ", userName=" + userName + ", reason=" + reason + ", emailId="
				+ emailId + ", userMobNo=" + userMobNo + "]";
	}

	

	
}
