package com.example.demo;

import com.example.demo.models.Volcano;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

import java.util.Arrays;
import java.util.List;

@RestController
public class MainController {

    private List<Volcano> volcanoes = Arrays.asList(
            new Volcano(1, "Stromboli"),
            new Volcano(2, "Etna")
    );

    @GetMapping("/api/volcanoes")
    public List<Volcano> getVolcanoes() {
        return volcanoes;
    }

    @Bean
    public CommonsRequestLoggingFilter requestLoggingFilter() {
        CommonsRequestLoggingFilter loggingFilter = new CommonsRequestLoggingFilter();
        loggingFilter.setIncludeClientInfo(true);
        loggingFilter.setIncludeQueryString(true);
        loggingFilter.setIncludePayload(true);
        loggingFilter.setIncludeHeaders(false);
        return loggingFilter;
    }

}
