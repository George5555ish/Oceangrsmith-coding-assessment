package com.example.oceangrsmithcodingassessment.locker;

import java.util.List;

public class Locker {

    private Long id;
    private String location;
    private String[] availableLockers;

    public Locker() {
    }

    public Locker(Long id,
                  String location,
                  String[] availableLockers) {
        this.id = id;
        this.location = location;
        this.availableLockers = availableLockers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public  String[] getAvailableLockers() {
        return availableLockers;
    }

    public void setAvailableLockers( String[] availableLockers) {
        this.availableLockers = availableLockers;
    }

    @Override
    public String toString() {
        return "Locker{" +
                "id=" + id +
                ", location='" + location + '\'' +
                ", availableLockers=" + availableLockers +
                '}';
    }
}
