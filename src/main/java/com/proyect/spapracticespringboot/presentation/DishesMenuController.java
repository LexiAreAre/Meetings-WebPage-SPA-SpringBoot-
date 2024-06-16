package com.proyect.spapracticespringboot.presentation;

import com.proyect.spapracticespringboot.logic.Dish;
import com.proyect.spapracticespringboot.logic.services.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DishesMenuController {
    @Autowired
    DishService dishService;

    @GetMapping("/api/dishes")
    public ResponseEntity<List<Dish>> getDishesByCategory(@RequestParam String category) {
        return ResponseEntity.ok(dishService.DishesByCategory(category));
    }
}
