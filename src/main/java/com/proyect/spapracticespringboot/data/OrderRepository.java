package com.proyect.spapracticespringboot.data;

import com.proyect.spapracticespringboot.logic.Order;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class OrderRepository {
    private final int order_number = 0;
    private final ArrayList<Order> list = new ArrayList<Order>();

    public ArrayList<Order> getOrder() {
        return list;
    }
}
