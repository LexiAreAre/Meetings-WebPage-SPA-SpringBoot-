package com.proyect.spapracticespringboot.presentation.login;

import com.proyect.spapracticespringboot.logic.services.UserService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class Login_controller {

    @Autowired
    UserService userService;

    @PostMapping("Meetings/api/login")
    public ResponseEntity<Object> login(@RequestBody Map<String, String> body) {

        String username = body.get("username");
        String password = body.get("password");

        if (userService.login(username, password)) {
            return ResponseEntity.ok(new MessageResponse("Login successful"));
        } else {
            return ResponseEntity.status(401).body(new MessageResponse("Invalid username or password"));
        }

    }

    private record MessageResponse(String message) {
    }
}
