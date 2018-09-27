package com.example.demo;

import com.example.demo.models.Volcano;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VolcanoRepository extends CrudRepository<Volcano,Long> {
    public List<Volcano> findAll();
}