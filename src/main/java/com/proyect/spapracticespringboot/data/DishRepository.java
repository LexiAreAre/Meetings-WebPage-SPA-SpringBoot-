package com.proyect.spapracticespringboot.data;

import com.proyect.spapracticespringboot.logic.Category;
import com.proyect.spapracticespringboot.logic.Dish;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DishRepository {
    private final ArrayList<Dish> list;

    public DishRepository() {
        ArrayList<Dish> list = new ArrayList<Dish>();

        list.add(new Dish("Ensalada de pollo", "Ensalada de pollo con lechuga, tomate, zanahoria y pollo a la plancha", new Category("Entradas"), 12.99));
        list.add(new Dish("Lomo saltado", "Lomo saltado con arroz, papas fritas y cebolla", new Category("Carnes"), 15.99));
        list.add(new Dish("Sopa de pollo", "Sopa de pollo con fideos, zanahoria, arvejas y pollo", new Category("Sopas"), 9.99));
        list.add(new Dish("Arroz con pollo", "Arroz con pollo con arroz, pollo, zanahoria y arvejas", new Category("Arroces"), 14.99));
        list.add(new Dish("Chicha morada", "Chicha morada con maíz morado, piña, manzana y canela", new Category("Bebidas"), 3.99));
        list.add(new Dish("Torta de chocolate", "Torta de chocolate con chocolate, azúcar, harina y huevos", new Category("Postres"), 6.99));
        list.add(new Dish("Ceviche", "Ceviche with fresh fish, lime, onions, and cilantro", new Category("Entradas"), 14.99));
        list.add(new Dish("Pasta Carbonara", "Pasta Carbonara with spaghetti, eggs, cheese, and bacon", new Category("Carnes"), 13.99));
        list.add(new Dish("Chicken Noodle Soup", "Chicken Noodle Soup with chicken, noodles, and vegetables", new Category("Sopas"), 8.99));
        list.add(new Dish("Fried Rice", "Fried Rice with rice, vegetables, and soy sauce", new Category("Arroces"), 11.99));

        this.list = list;
    }

    public ArrayList<Dish> getDishesByCategory(String category) {
        ArrayList<Dish> dishes = new ArrayList<Dish>();
        for (Dish dish : list) {
            if (dish.getCategory().getCategory_name().equals(category)) {
                dishes.add(dish);
            }
        }
        return dishes;
    }

    public Dish findByDishName(String title) {
        for (Dish dish : list) {
            if (dish.getName().equals(title)) {
                return dish;
            }
        }
        return null;
    }
}