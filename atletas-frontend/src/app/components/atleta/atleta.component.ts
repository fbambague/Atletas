import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Atleta } from 'src/app/modelo/Atleta';
import { InfoAtleta } from 'src/app/modelo/InfoAtleta';
import { AtletaServiceService } from 'src/app/service/atleta-service.service';
import { InfoAtletaService } from 'src/app/service/info-atleta.service';
import { PasoInformacionService } from '../paso-informacion.service';

@Component({
  selector: 'app-atleta',
  templateUrl: './atleta.component.html',
  styleUrls: ['./atleta.component.css']
})
export class AtletaComponent implements OnInit {

  public atletas: Atleta[] | undefined ;
  @Input() atleta: any | undefined;
  infoAtleta: InfoAtleta | undefined;
  editAtleta: Atleta | undefined;
  deleteAtleta: Atleta | undefined;


  constructor(private atletaService:AtletaServiceService, 
              private pasoInformacion: PasoInformacionService,
              private infoAtletaService: InfoAtletaService){}


  ngOnInit(): void {
    this.listarAtletas();
  }

  public listarAtletas(){
    this.atletaService.listarAtletas().subscribe(
      (response: Atleta[])=>{
        console.log(response);
        this.atletas = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public mostrarInfo(atleta:Atleta){
    this.atleta = atleta;
    console.log('envia' + this.atleta.nombre);
    this.pasoInformacion.atleta.emit({
      data:this.atleta
    });

  }


  public onAgregarAtleta(addForm: NgForm){
    this.atletaService.guardarAtleta(addForm.value).subscribe(
      (response: Atleta)=>{
        console.log(response);
        this.listarAtletas();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


  public onAgregarInfo(addInfoForm: InfoAtleta){
    this.infoAtletaService.guardarInfo(addInfoForm).subscribe(
      (response: InfoAtleta) =>{
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onDeleteAtleta (idAtleta: number){
    this.onDeleteInfoAtleta(idAtleta);
    this.atletaService.eliminarAtleta(idAtleta).subscribe(
      (response: void)=>{
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onDeleteInfoAtleta (idAtleta: number){
    this.infoAtletaService.eliminarInfoAtleta(idAtleta).subscribe(
      (response: void)=>{
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


  public onEditInfo(atleta: Atleta):void{
    this.editAtleta = atleta;
    
  }

  public onDelete(atleta: Atleta):void{
    this.deleteAtleta = atleta;
  }


}
