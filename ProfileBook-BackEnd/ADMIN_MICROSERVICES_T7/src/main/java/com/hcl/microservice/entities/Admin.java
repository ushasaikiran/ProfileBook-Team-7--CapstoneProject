package com.hcl.microservice.entities;

import java.util.List;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "admin_table")
public class Admin{ // ADMIN TABLE
	
	// ADMIN ENTITY CLASS

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long adminId;
	
	private String adminName;
	
	private String adminPassword;
	
	private String emailId;
	
	private long adminMobNo;

	public Admin() {
		super();
	}

	public Admin(long adminId, String adminName, String adminPassword, String emailId, long adminMobNo) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminPassword = adminPassword;
		this.emailId = emailId;
		this.adminMobNo = adminMobNo;
	}

	public long getAdminId() {
		return adminId;
	}

	public void setAdminId(long adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getAdminMobNo() {
		return adminMobNo;
	}

	public void setAdminMobNo(long adminMobNo) {
		this.adminMobNo = adminMobNo;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminName=" + adminName + ", adminPassword=" + adminPassword
				+ ", emailId=" + emailId + ", adminMobNo=" + adminMobNo + "]";
	}

//
//	@OneToOne(cascade=CascadeType.ALL)
//    @JoinColumn(name = "userId")
//    private User user;


	
    

	
	
	
}
