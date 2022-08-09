package com.example.holaSpring.servicio;

import com.example.holaSpring.dao.AtletaDao;
import com.example.holaSpring.modelo.Atleta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtletaServiceImpl implements AtletaService{

    private final AtletaDao atletaDao;

    @Autowired
    public AtletaServiceImpl(AtletaDao atletaDao) {
        this.atletaDao = atletaDao;
    }

    @Override
    public List<Atleta> listarAtletas() {
        return this.atletaDao.findAll();
    }

    @Override
    public Atleta buscarAtleta(Long id) {
        return this.atletaDao.findById(id).orElse(null);
    }

    @Override
    public void eliminarAtleta(Long id) {
        this.atletaDao.deleteById(id);
    }

    @Override
    public Atleta guardarAtleta(Atleta atleta) {
        return this.atletaDao.save(atleta);
    }

    @Override
    public Atleta actualizarAtleta(Atleta atleta) {
        return this.atletaDao.save(atleta);
    }
}
