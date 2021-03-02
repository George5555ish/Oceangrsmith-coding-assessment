package com.example.oceangrsmithcodingassessment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@SpringBootApplication
public class OceangrsmithCodingAssessmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(OceangrsmithCodingAssessmentApplication.class, args);
	}



	@GetMapping
	@RequestMapping(
			path = "api/v1/hello"
	)
	public List<String> hello(){

		return List.of(String.format("Hello", "how are you"));
	}

}
