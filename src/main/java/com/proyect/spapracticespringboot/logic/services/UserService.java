package com.proyect.spapracticespringboot.logic.services;

import com.proyect.spapracticespringboot.data.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Objects;
@Service
public class UserService {
    public boolean login(String username, String password) {
        return Objects.requireNonNull(UserRepository.findByUsername(username)).getPassword().equals(password);
    }
}
