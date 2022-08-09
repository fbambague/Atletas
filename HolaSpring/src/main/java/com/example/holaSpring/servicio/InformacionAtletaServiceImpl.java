package com.example.holaSpring.servicio;

import com.example.holaSpring.dao.InformacionAtletaDao;
import com.example.holaSpring.modelo.InformacionAtleta;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InformacionAtletaServiceImpl implements InformacionAtletaService{

    private final InformacionAtletaDao informacionAtletaDao;

    public InformacionAtletaServiceImpl(InformacionAtletaDao informacionAtletaDao) {
        this.informacionAtletaDao = informacionAtletaDao;
    }

    @Override
    public List<InformacionAtleta> listarInfo() {
        return this.informacionAtletaDao.findAll();
    }

    @Override
    public InformacionAtleta buscarInfo(Long id) {
        //return this.informacionAtletaDao.findById(id).orElse(null);
        return this.informacionAtletaDao.findByIdAtleta(id);
    }

    @Override
    public void eliminarInfo(Long id){
        //this.informacionAtletaDao.deleteById(id);
        this.informacionAtletaDao.deleteByIdAtleta(id);
    }

    @Override
    public InformacionAtleta guardarInfo(InformacionAtleta infoAtleta) {
        return this.informacionAtletaDao.save(infoAtleta);
    }

    @Override
    public InformacionAtleta actualizarInfo(InformacionAtleta infoAtleta) {
        return this.informacionAtletaDao.save(infoAtleta);
    }
}
