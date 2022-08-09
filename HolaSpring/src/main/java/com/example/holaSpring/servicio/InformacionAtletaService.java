package com.example.holaSpring.servicio;

import com.example.holaSpring.modelo.InformacionAtleta;

import java.util.List;

public interface InformacionAtletaService {

    public List<InformacionAtleta> listarInfo();
    public InformacionAtleta buscarInfo(Long id);
    public void eliminarInfo(Long id);
    public InformacionAtleta guardarInfo(InformacionAtleta infoAtleta);
    public InformacionAtleta actualizarInfo(InformacionAtleta infoAtleta);

}
