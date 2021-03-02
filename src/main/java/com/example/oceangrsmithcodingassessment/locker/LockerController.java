package com.example.oceangrsmithcodingassessment.locker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(
        path = "api/v1/lockerData"
)
@CrossOrigin("*")
public class LockerController {

    private final LockerService lockerService;

    @Autowired
    public LockerController(LockerService lockerService) {
        /*Using Dependency Injection to make this work*/
        this.lockerService = lockerService;
    }

    @GetMapping

   public List <Locker> getLockers(){

        return lockerService.getLockers();
    }

}
