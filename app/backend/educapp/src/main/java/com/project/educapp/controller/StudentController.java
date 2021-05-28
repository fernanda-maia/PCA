package com.project.educapp.controller;

import com.project.educapp.model.StudentDTO;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/student")
public class StudentController {

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StudentDTO> save(@Valid @RequestBody StudentDTO dto) {
        return ResponseEntity.ok(dto);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StudentDTO> update(@Valid @RequestBody StudentDTO newData) {
        return ResponseEntity.ok(newData);
    }
}
