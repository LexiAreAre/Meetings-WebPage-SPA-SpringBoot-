package com.proyect.spapracticespringboot.logic.services;

import com.proyect.spapracticespringboot.data.DishRepository;
import com.proyect.spapracticespringboot.logic.Dish;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class DishService {
    @Autowired
    private DishRepository dishRepository;

    public ArrayList<Dish> DishesByCategory(String category) {
        return dishRepository.getDishesByCategory(category);
    }
}
