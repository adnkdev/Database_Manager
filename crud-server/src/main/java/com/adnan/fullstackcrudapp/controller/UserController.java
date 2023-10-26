package com.adnan.fullstackcrudapp.controller;


import com.adnan.fullstackcrudapp.exception.UserNotFoundException;
import com.adnan.fullstackcrudapp.model.User;
import com.adnan.fullstackcrudapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//`connect frontend to backend
@CrossOrigin("http://localhost:3000")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    //posting data into mysql database
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    //getting data from database
    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //get user by id
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));

    }

    //editing a User details
    @PutMapping("/user/{id}")
    User EditId(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);

                })
                .orElseThrow(()->new UserNotFoundException(id));

    }

    //deleting by user id
    @DeleteMapping("/user/{id}")
    String DeleteId(@PathVariable Long id){

        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }

        userRepository.deleteById(id);
        return "User with id "+ id+" has been deleted successfully";

    }



}
