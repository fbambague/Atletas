package com.example.holaSpring.dao;

import com.example.holaSpring.modelo.Atleta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtletaDao extends JpaRepository<Atleta, Long> {
}
