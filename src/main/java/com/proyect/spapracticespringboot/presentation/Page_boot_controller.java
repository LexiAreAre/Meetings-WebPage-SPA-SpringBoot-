package com.proyect.spapracticespringboot.presentation;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping("/Restaurant")
public class Page_boot_controller {

    private final ResourceLoader resourceLoader;

    public Page_boot_controller(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @GetMapping
    public String boot() throws IOException {
        Resource resource = resourceLoader.getResource("classpath:/static/index.html");
        return new String(Files.readAllBytes(Paths.get(resource.getURI())));
    }
}