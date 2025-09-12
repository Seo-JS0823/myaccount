package com.myaccount.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myaccount.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
}
