package com.project.educapp.service;

import com.project.educapp.mapper.StudentMapper;
import com.project.educapp.model.Student;
import com.project.educapp.model.dto.StudentDTO;
import com.project.educapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StudentService {

    @Autowired
    StudentRepository repository;

    @Autowired
    StudentMapper mapper;

    @Transactional
    public StudentDTO save(StudentDTO dto) {
        Student student = mapper.toEntity(dto);
        repository.save(student);

        return mapper.toDTO(student);
    }
}
