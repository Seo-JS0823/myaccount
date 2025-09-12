package com.myaccount.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.myaccount.dto.UserDTO;
import com.myaccount.model.User;
import com.myaccount.service.UserService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class IndexController {
	
	@Autowired
	private UserService userService;
	
	// 첫 페이지 (로그인 화면)
	@GetMapping("/")
	public String indexForm() {
		return "home";
	}
	
	// 회원가입 페이지
	@GetMapping("/join")
	public String joinForm() {
		return "index";
	}
	
	// 회원가입
	@PostMapping("/user/save")
	public String userSave(UserDTO user) {
		User target = user.toEntity();
		userService.userInsert(target);
		return "redirect:/";
	}
	
	// 로그인 실행
	@PostMapping("/login")
	public String login(UserDTO user, Model model) {
		User target = userService.userLogin(user.getUserid(), user.getPassword());
		model.addAttribute("user", target);
		return "account/dashboard";
	}
	
	// 로그아웃
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
	
}









