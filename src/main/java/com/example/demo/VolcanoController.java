package com.example.demo;

import com.example.demo.models.Volcano;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

import java.util.Arrays;
import java.util.List;

@RestController
public class VolcanoController {

    @Autowired
    VolcanoRepository volcanoRepository;

    @GetMapping("/api/volcanoes")
    public List<Volcano> getVolcanoes() {
        return volcanoRepository.findAll();
    }

    @PostMapping(value = "/api/volcanoes")
    public Volcano newVolcano(@RequestBody Volcano menu) {
        return volcanoRepository.save(menu);
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
