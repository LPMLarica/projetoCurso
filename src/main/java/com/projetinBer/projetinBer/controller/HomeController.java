package com.projetinBer.projetinBer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index.html";  // Nome do arquivo template (index.html)
    }
}
