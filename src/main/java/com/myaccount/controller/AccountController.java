package com.myaccount.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myaccount.model.User;

@Controller
@RequestMapping("/account")
public class AccountController {
	
	@GetMapping("/createForm")
	@ResponseBody
	public List<User> accountCreateForm() {
		
		// 임시
		return new ArrayList<>();
	}
}
