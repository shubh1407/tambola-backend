package com.InnovTeam.tambola.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {
	@RequestMapping(value = "/**/{[path:[^\\.]*}")
	   public String redirect() {
	        // Forward to home page so that angular routing is preserved.
			System.out.println("Hello");
	        return "/"; 
	    } 
}