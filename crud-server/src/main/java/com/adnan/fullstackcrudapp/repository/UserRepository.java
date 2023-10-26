package com.adnan.fullstackcrudapp.repository;

import com.adnan.fullstackcrudapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
