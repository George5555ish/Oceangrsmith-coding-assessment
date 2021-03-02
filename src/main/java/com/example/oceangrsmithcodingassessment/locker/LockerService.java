package com.example.oceangrsmithcodingassessment.locker;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LockerService {


    public List<Locker> getLockers(){

        String[] ikejaLocker = {"Ikeja Locker 1", "Ikeja Locker 2", "Ikeja Locker 3", "Ikeja Locker 4"};
        String[] lekkiLocker = {"Lekki Locker 1", "Lekki Locker 2", "Lekki Locker 3", "Lekki Locker 4", "Lekki Locker 5"};
        String[] ajahLocker = {"Ajah Locker 1", "Ajah Locker 2"};
        String[] ikoroduLocker = {"Ikorodu Locker 1", "Ikorodu Locker 2", "Ikorodu Locker 3", "Ikorodu Locker 4"};
        String[] surulereLocker = {"Surulere Locker 1"};
        String[] apapaLocker = {"Apapa Locker 1", "Apapa Locker 2", "Apapa Locker 3"};
        String[] mile12Locker = {"Mile 12 Locker 1", "Mile 12 Locker 2", "Mile 12 Locker 3", "Mile 12 Locker 4"};

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
                        "Apapa",
                        apapaLocker

                ),new Locker(7L,
                        "Mile 12",
                        mile12Locker

                )
        );
    }

}
