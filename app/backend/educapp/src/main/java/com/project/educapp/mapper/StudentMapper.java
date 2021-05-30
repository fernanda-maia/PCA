package com.project.educapp.mapper;

import com.project.educapp.model.Student;
import com.project.educapp.model.dto.StudentDTO;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class StudentMapper {

    public Student toEntity(StudentDTO dto) {
        Student student = new Student();

        student.setId(dto.getId());
        student.setName(dto.getName());
        student.setEmail(dto.getEmail());
        student.setUsername(dto.getUsername());
        student.setBirthday(dto.getBirthday());
        student.setPassword(dto.getPassword());
        student.setRegistration(dto.getRegistration());

        return student;
    }

    public StudentDTO toDTO(Student student) {
        StudentDTO dto = new StudentDTO();

        dto.setId(student.getId());
        dto.setName(student.getName());
        dto.setEmail(student.getEmail());
        dto.setUsername(student.getUsername());
        dto.setBirthday(student.getBirthday());
        dto.setPassword(student.getPassword());
        dto.setRegistration(student.getRegistration());

        return dto;
    }

    public List<StudentDTO> toDTO(List<Student> studentList) {
        return studentList.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
