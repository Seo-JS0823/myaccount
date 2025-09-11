package com.myaccount.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myaccount.dto.UserDTO;
import com.myaccount.model.User;
import com.myaccount.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {
	@Autowired
	private UserRepository userRep;
	
	/* 회원가입 */
	public void userInsert(User user) {
		userRep.save(user);
	}
	
	/* 로그인 */
	public User userLogin(String userid) {
		User target = userRep.findById(userid).orElse(null);
		return target;
	}
	
}












