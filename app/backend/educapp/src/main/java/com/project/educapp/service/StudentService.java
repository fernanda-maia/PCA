package com.project.educapp.service;

import com.project.educapp.exceptions.BusinessException;
import com.project.educapp.exceptions.NotFoundException;
import com.project.educapp.mapper.StudentMapper;
import com.project.educapp.model.Student;
import com.project.educapp.model.dto.StudentDTO;
import com.project.educapp.repository.StudentRepository;
import com.project.educapp.util.MessageUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    @Autowired
    private StudentMapper mapper;

    @Transactional
    public StudentDTO save(StudentDTO dto) {
        Optional<Student> optionalStudent = repository
                .findByEmailOrRegistration(dto.getEmail(), dto.getRegistration());

        if(optionalStudent.isPresent()) {
            throw new BusinessException(MessageUtils.RECORD_ALREADY_EXISTS);
        }

        Student student = mapper.toEntity(dto);
        repository.save(student);

        return mapper.toDTO(student);
    }

    //FIXME - Verificar restrições
    @Transactional
    public StudentDTO update(StudentDTO dto) {
        Student student = mapper.toEntity(dto);
        repository.save(student);

        return mapper.toDTO(student);

    }

    @Transactional
    public StudentDTO delete(StudentDTO student) {
        StudentDTO dto = this.findById(student.getId());
        repository.deleteById(student.getId());

        return dto;
    }

    @Transactional(readOnly = true)
    public List<StudentDTO> findAll() {
        return mapper.toDTO(repository.findAll());
    }

    @Transactional(readOnly = true)
    public StudentDTO findById(Long id) {
        return repository.findById(id)
                .map(mapper::toDTO)
                .orElseThrow(NotFoundException::new);
    }
}
