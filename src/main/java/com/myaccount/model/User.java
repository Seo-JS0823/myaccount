package com.myaccount.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {

	@Id
	@Column(name = "USERID", nullable = false, length = 20)
	private String userid;
	
	@Column(name = "PASSWORD", nullable = false, length = 64)
	private String password;
	
	@Column(name = "USERNAME", nullable = false, length = 20)
	private String username;
	
	public User() {}
	
	/** new User(userid, password, username) */
	public User(String userid, String password, String username) {
		this.userid = userid;
		this.password = password;
		this.username = username;
	}
	
	/* Getter / Setter */
	public String getUserid() {return userid;}
	public void setUserid(String userid) {this.userid = userid;}

	public String getPassword() {return password;}
	public void setPassword(String password) {this.password = password;}

	public String getUsername() {return username;}
	public void setUsername(String username) {this.username = username;}
}
