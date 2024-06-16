package com.proyect.spapracticespringboot.presentation;

import com.proyect.spapracticespringboot.logic.Dish;
import com.proyect.spapracticespringboot.logic.Order;
import com.proyect.spapracticespringboot.logic.services.DishService;
import com.proyect.spapracticespringboot.logic.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private DishService dishService;

    @PostMapping("/api/order")
    public ResponseEntity<String> createOrder(@RequestBody Map<String, String> body) {

        String title = body.get("title");
        String size = body.get("size");
        int quantity = Integer.parseInt(body.get("quantity"));

        Dish dish = dishService.findByDishName(title);
        boolean sizeBoolean = size.equals("Regular");
        Order order = new Order(dish, quantity, sizeBoolean);

        orderService.createOrder(order);

        return ResponseEntity.ok("Order created" + orderService.getOrderID());
    }
}
