import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atleta } from 'src/app/modelo/Atleta';
import { InfoAtleta } from 'src/app/modelo/InfoAtleta';
import { AtletaServiceService } from 'src/app/service/atleta-service.service';
import { InfoAtletaService } from 'src/app/service/info-atleta.service';

@Component({
  selector: 'app-info-atleta',
  templateUrl: './info-atleta.component.html',
  styleUrls: ['./info-atleta.component.css']
})
export class InfoAtletaComponent implements OnInit {

  //infoAtletas: InfoAtleta[] | undefined;
  infoAtleta: InfoAtleta | undefined;
  idAtleta: number | undefined;
  nombre: string | undefined;
  apellido: string | undefined;
  identificacion: string | undefined;
  atleta: Atleta | undefined;


  constructor(private infoAtletaService: InfoAtletaService, 
              private route:ActivatedRoute,
              private atletaService: AtletaServiceService) { 
  }

  

  ngOnInit(): void {

    this.idAtleta = this.route.snapshot.params['idAtleta'],
    this.nombre = this.route.snapshot.params['nombre'],
    this.apellido = this.route.snapshot.params['apellido'],
    this.identificacion = this.route.snapshot.params['identificacion']

    this.buscarInfo();

  }

  public buscarInfo(){
    this.infoAtletaService.buscarInfo(this.idAtleta!).subscribe(
      (response: InfoAtleta)=>{
        this.infoAtleta = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public buscarAtleta(){
    this.atletaService.buscarAtleta(this.idAtleta!).subscribe(
      (response: Atleta)=>{
         this.atleta = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


}
