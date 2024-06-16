package com.proyect.spapracticespringboot.logic.services;

import com.proyect.spapracticespringboot.data.CategoryRepository;
import com.proyect.spapracticespringboot.logic.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public ArrayList<Category> listAllCategories() {
        return categoryRepository.getList();
    }
}
