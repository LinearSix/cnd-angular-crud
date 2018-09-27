package com.example.demo.models;

import java.util.Objects;

public class Volcano {
    private long id;
    private String name;

    public Volcano() {
    }

    public Volcano(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Volcano volcano = (Volcano) o;
        return id == volcano.id &&
                Objects.equals(name, volcano.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
