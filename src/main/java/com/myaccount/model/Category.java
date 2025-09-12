package com.myaccount.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "CATEGORYS")
public class Category {
	/*
	CATEGORY_ID NOT NULL NUMBER       
	CATE_NAME   NOT NULL VARCHAR2(30) 
	ACOT_FLAG   NOT NULL VARCHAR2(30)
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CATE_SEQ")
	@SequenceGenerator(
		name = "CATE_SEQ",
		sequenceName = "CATEGORY_SEQ",
		allocationSize = 1
	)
	@Column(name = "CATEGORY_ID")
	private Long category_id;
	
	@Column(name = "CATE_NAME", nullable = false, length = 30)
	private String cate_name;
	
	@Column(name = "ACOT_FLAG", nullable = false, length = 30)
	private String acot_flag;
	
	protected Category() {}
	
	public Category(Long category_id, String cate_name, String acot_flag) {
		this.category_id = category_id;
		this.cate_name = cate_name;
		this.acot_flag = acot_flag;
	}
	
	public Long getCategory_id() { return category_id; }
	
	public void setCate_name(String cate_name) { this.cate_name = cate_name; }
	public String getCate_name() { return cate_name; }
	
	public void setAcot_flag(String acot_flag) { this.acot_flag = acot_flag; }
	public String getAcot_flag() { return acot_flag; }
}
