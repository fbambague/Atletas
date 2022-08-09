package com.example.holaSpring.controlador;

import com.example.holaSpring.modelo.InformacionAtleta;
import com.example.holaSpring.servicio.InformacionAtletaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/infoAtleta")
@RequiredArgsConstructor
public class InformacionAtletaControlador {

    private final InformacionAtletaService informacionAtletaService;

    @GetMapping("/listarInfo")
    public ResponseEntity<List<InformacionAtleta>> listarInfo(){
        List<InformacionAtleta> informacionAtletas = informacionAtletaService.listarInfo();
        return new ResponseEntity<>(informacionAtletas, HttpStatus.OK);
    }

    @GetMapping("/buscarInfo/{idAtleta}")
    public ResponseEntity<InformacionAtleta> buscarInfo(@PathVariable("idAtleta")Long idAtleta){
        InformacionAtleta informacionAtleta = informacionAtletaService.buscarInfo(idAtleta);
        return new ResponseEntity<>(informacionAtleta,HttpStatus.OK);
    }

    @DeleteMapping("/ /{idAtleta}")
    public ResponseEntity<?> eliminarInfo(@PathVariable("idAtleta") Long idAtleta){
        informacionAtletaService.eliminarInfo(idAtleta);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/guardarInfo")
    public ResponseEntity<InformacionAtleta> guardarInfo(@RequestBody InformacionAtleta informacionAtleta){
        InformacionAtleta newInformacionAtleta = informacionAtletaService.guardarInfo(informacionAtleta);
        return new ResponseEntity<>(newInformacionAtleta,HttpStatus.CREATED);
    }


    @PutMapping("/actualizarInfo/{id}")
    public ResponseEntity<InformacionAtleta> actualizarInfo(@PathVariable("idInfo")Long idInfo){
        InformacionAtleta updateInformacionAtleta = informacionAtletaService.buscarInfo(idInfo);
        return new ResponseEntity<>(updateInformacionAtleta, HttpStatus.OK);
    }

}
