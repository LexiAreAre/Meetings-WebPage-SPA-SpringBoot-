package com.proyect.spapracticespringboot.data;

import com.proyect.spapracticespringboot.logic.Category;
import lombok.Getter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
@Getter
@Component
public class CategoryRepository {
    private final ArrayList<Category> list;
    public CategoryRepository() {
        ArrayList<Category> list = new ArrayList<Category>();

        list.add(new Category("Entradas"));
        list.add(new Category("Carnes"));
        list.add(new Category("Sopas"));
        list.add(new Category("Arroces"));
        list.add(new Category("Bebidas"));
        list.add(new Category("Postres"));

        this.list = list;
    }
}
