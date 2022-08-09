package com.example.holaSpring.modelo;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "informacionatleta",schema = "atletas")
public class InformacionAtleta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_informacion_atleta")
    private Long idInformacionAtleta;
    private Long edad;
    private double peso;
    private double estatura;
    private double imc;
    private String nivelPeso;
    @Column(name="id_atleta")
    private Long idAtleta;


}
