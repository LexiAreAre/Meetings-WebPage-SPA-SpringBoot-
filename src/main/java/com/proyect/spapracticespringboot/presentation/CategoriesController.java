package com.proyect.spapracticespringboot.presentation;

import com.proyect.spapracticespringboot.data.CategoryRepository;
import com.proyect.spapracticespringboot.logic.Category;
import com.proyect.spapracticespringboot.logic.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoriesController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/api/categories")
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(categoryService.listAllCategories());
    }
}
