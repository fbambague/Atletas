package com.example.holaSpring.dao;

import com.example.holaSpring.modelo.InformacionAtleta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InformacionAtletaDao extends JpaRepository<InformacionAtleta, Long> {
    void deleteByIdAtleta(Long id);

    InformacionAtleta findByIdAtleta(Long id);
}
