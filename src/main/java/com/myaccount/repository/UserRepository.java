package com.myaccount.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myaccount.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	
	Optional<User> findByUseridAndPassword(String userid, String password);
}
