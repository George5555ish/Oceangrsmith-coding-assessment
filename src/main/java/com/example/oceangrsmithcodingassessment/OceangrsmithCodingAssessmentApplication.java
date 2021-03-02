package com.example.oceangrsmithcodingassessment;

import com.example.oceangrsmithcodingassessment.locker.Locker;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;
import java.util.List;
import java.util.Map;

@SpringBootApplication
@RestController
public class OceangrsmithCodingAssessmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(OceangrsmithCodingAssessmentApplication.class, args);
	}




	@GetMapping
	public List<Locker> getLockers(){

		String[] ikejaLocker = {"Ikeja Locker 1", "Ikeja Locker 2", "Ikeja Locker 3", "Ikeja Locker 1"};
		String[] lekkiLocker = {"Lekki Locker 1", "Lekki Locker 2", "Lekki Locker 3", "Lekki Locker 4", "Lekki Locker 5"};
		String[] ajahLocker = {"Ajah Locker 1", "Ajah Locker 2"};
		String[] ikoroduLocker = {"Ikorodu Locker 1", "Ikorodu Locker 2", "Ikorodu Locker 3", "Ikorodu Locker 4"};
		String[] surulereLocker = {"Surulere Locker 1"};
		String[] apapaLocker = {"Apapa Locker 1"};
		String[] mile12Locker = {"Mile 12 Locker 1", "Mile 12 Locker 2", "Mile 12 Locker 3"};

		return List.of(
				new Locker(1L,
							"Ikeja",
						ikejaLocker

		), new Locker(2L,
						"Lekki",
						lekkiLocker

				),
				new Locker(3L,
						"Ajah",
						ajahLocker

				),new Locker(4L,
						"Ikorodu",
						ikoroduLocker

				),new Locker(5L,
						"Surulere",
						surulereLocker

				),new Locker(6L,
						"Surulere",
						apapaLocker

				),new Locker(7L,
						"Surulere",
						mile12Locker

				)
		);
	}

}
