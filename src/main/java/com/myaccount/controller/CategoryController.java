package com.myaccount.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myaccount.model.Category;
import com.myaccount.repository.CategoryRepository;

@Controller
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryReq;
	
	@GetMapping("/categoryList")
	@ResponseBody
	public List<Category> getCategoryList() {
		List<Category> list = categoryReq.findAll();
		
		if(list.size() < 1) return new LinkedList<Category>();
		
		return list;
	}
}
