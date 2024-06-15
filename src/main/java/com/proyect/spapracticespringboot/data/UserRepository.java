package com.proyect.spapracticespringboot.data;

import com.proyect.spapracticespringboot.logic.User;

import java.util.List;
import java.util.ArrayList;

public class UserRepository {
    // list of users
    private static final List<User> users = new ArrayList<>();
    // Class Constructor with at least 5 users
    static {
        users.add(new User("admin", "admin"));
        users.add(new User("user", "user"));
        users.add(new User("user1", "user1"));
        users.add(new User("user2", "user2"));
        users.add(new User("user3", "user3"));
    }
    // Method to find a user by username
    public static User findByUsername(String username) {
        for (User user : users) {
            if (user.getUsername().equals(username)) {
                return user;
            }
        }
        return null;
    }
}
