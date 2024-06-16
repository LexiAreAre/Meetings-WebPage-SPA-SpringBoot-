package com.proyect.spapracticespringboot.logic.services;

import com.proyect.spapracticespringboot.data.OrderRepository;
import com.proyect.spapracticespringboot.logic.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public ArrayList<Order> getOrder(){
        return orderRepository.getOrder();
    }

    public void createOrder() {

    }
}
