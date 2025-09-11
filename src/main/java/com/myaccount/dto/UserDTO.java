package com.myaccount.dto;

import com.myaccount.model.User;

import lombok.Data;

@Data
public class UserDTO {
	private String userid;
	private String password;
	private String username;
	
	public User toEntity() {
		return new User(userid, password, username);
	}
}
