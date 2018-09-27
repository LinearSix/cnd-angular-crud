package com.example.demo;

import com.example.demo.models.Volcano;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.apache.commons.lang3.StringUtils;
import org.fluentlenium.adapter.junit.FluentTest;
import org.fluentlenium.core.domain.FluentList;
import org.fluentlenium.core.domain.FluentWebElement;
import org.fluentlenium.core.hook.wait.Wait;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
@Wait
public class UAT extends FluentTest {
    @Value("${local.server.port}")
    private String port;

    @Autowired
    VolcanoRepository volcanoRepository;

    private ObjectMapper mapper = new ObjectMapper();

    @Before
    public void before() {
        volcanoRepository.deleteAll();
    }

    @After
    public void after() {
        volcanoRepository.deleteAll();
    }

    @Override
    public WebDriver newWebDriver() {
        ChromeOptions opt = new ChromeOptions();
        opt.addArguments("--headless");
        opt.addArguments("--disable-gpu");
        opt.addArguments("--no-sandbox");
        WebDriver driver = new ChromeDriver(opt);
        return driver;
    }

    @Test
    public void shouldShowVolcanoesInChrome() {
        // Setup
        List<Volcano> expected = Arrays.asList(
                new Volcano(1, "Stromboli"),
                new Volcano(2, "Etna")
        );
        volcanoRepository.saveAll(expected);

        // Exercise
        goTo("http://localhost:" + this.port + "/volcanoes");
        await().until(() -> $("h2").present());

        // Assert
        FluentWebElement list = $(".volcanoes").get(0);

        FluentWebElement volcano1 = list.find("li a").get(0);
        FluentWebElement volcano2 = list.find("li a").get(1);
        assertEquals("1Stromboli", volcano1.text());
        assertEquals("2Etna", volcano2.text());
    }

}