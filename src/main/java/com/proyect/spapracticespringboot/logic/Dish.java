package com.proyect.spapracticespringboot.logic;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Dish {
    private String name;
    private String description;
    private Category category;
    private double price;
}
