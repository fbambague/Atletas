package com.example.holaSpring.servicio;

import com.example.holaSpring.modelo.Atleta;
import org.springframework.stereotype.Service;

import java.util.List;

public interface AtletaService {

    public List<Atleta> listarAtletas();
    public Atleta buscarAtleta(Long id);
    public void eliminarAtleta(Long id);
    public Atleta guardarAtleta(Atleta atleta);
    public Atleta actualizarAtleta(Atleta atleta);

}
