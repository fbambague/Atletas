package com.example.holaSpring.modelo;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "datosatleta", schema = "atletas")
public class Atleta {

    //private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_atleta")
    private Long idAtleta;
    private String nombre;
    private String apellido;
    private String identification;
    private String estado;
    private String direccion;
    private String celular;
    @Column(name="fecha_ingreso")
    private Date fechaIngreso;







}
