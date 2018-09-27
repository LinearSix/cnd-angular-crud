package com.example.demo;

import com.example.demo.models.Volcano;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class API {
    @Autowired
    private MockMvc mvc;

    @Autowired
    VolcanoRepository volcanoRepository;

    private ObjectMapper mapper = new ObjectMapper();

    public API() {
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
    }

    @Before
    public void before() {
        volcanoRepository.deleteAll();
    }

    @After
    public void after() {
        volcanoRepository.deleteAll();
    }

    @Test
    public void testGetMenu() throws Exception {
        // Setup
        List<Volcano> expected = Arrays.asList(
                new Volcano(1, "Stromboli"),
                new Volcano(2, "Etna")
        );
        volcanoRepository.saveAll(expected);

        // Exercise
        String response = mvc.perform(get("/api/volcanoes"))
                .andExpect(status().isOk())
                .andReturn()
                .getResponse()
                .getContentAsString();
        List<Volcano> actual = mapper.readValue(response, new TypeReference<List<Volcano>>() {});

        // Assert
        String actualJson = mapper.writeValueAsString(actual);
        String expectedJson = mapper.writeValueAsString(expected);
        assertEquals("GET response should match what is in DB", expectedJson, actualJson);
    }

}