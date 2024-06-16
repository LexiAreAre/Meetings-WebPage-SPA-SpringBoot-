package com.proyect.spapracticespringboot.data;

import com.proyect.spapracticespringboot.logic.Order;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class OrderRepository {
    private int order_number = 0;
    private final ArrayList<Order> list = new ArrayList<Order>();

    public ArrayList<Order> getOrder() {
        return list;
    }

    public void createOrder(Order order) {
        list.add(order);
        this.order_number++;
    }

    public String getOrderID() {
        return "Order number: " + order_number;
    }
}
