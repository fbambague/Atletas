package com.example.holaSpring.controlador;

import com.example.holaSpring.modelo.Atleta;
import com.example.holaSpring.servicio.AtletaService;
import lombok.RequiredArgsConstructor;;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/atletas")
@RequiredArgsConstructor
public class AtletaControlador {

    private final AtletaService atletaService;

    @GetMapping("/listar")
    public ResponseEntity<List<Atleta>> listarAtletas(){
        List<Atleta> atletas =  atletaService.listarAtletas();
        return new ResponseEntity<>(atletas, HttpStatus.OK);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Atleta> buscarAtleta(@PathVariable("id") Long id){
         Atleta atleta = atletaService.buscarAtleta(id);
         return new ResponseEntity<>(atleta, HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarAtleta(@PathVariable("id") Long id){
        atletaService.eliminarAtleta(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/guardar")
    public ResponseEntity<Atleta> guardarAtleta(@RequestBody Atleta atleta){
        Atleta newAtleta =  atletaService.guardarAtleta(atleta);
        return new ResponseEntity<>(newAtleta,HttpStatus.CREATED);
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Atleta> actualizarAtleta(@RequestBody Atleta atleta){
        Atleta updateAtleta = atletaService.actualizarAtleta(atleta);
        return new ResponseEntity<>(updateAtleta,HttpStatus.OK);
    }

}
