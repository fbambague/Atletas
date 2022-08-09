import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atleta } from '../modelo/Atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaServiceService {

  private apiUrl = 'http://localhost:8080/atletas';

  constructor( private httpClient: HttpClient ) { }

  public listarAtletas():Observable<Atleta[]>{
    console.log(`${this.apiUrl}/listar`);
    return this.httpClient.get<Atleta[]>(`${this.apiUrl}/listar`);    
  }
 
  public buscarAtleta(idAtleta: number): Observable<Atleta>{
    console.log(`${this.apiUrl}/buscar/${idAtleta}`);
    return this.httpClient.get<Atleta>(`${this.apiUrl}/buscar/${idAtleta}`);
  }

  public guardarAtleta(atleta: Atleta):Observable<Atleta>{
    console.log(`${this.apiUrl}/guardar`);
    return this.httpClient.post<Atleta>(`${this.apiUrl}/guardar`,atleta);
  }

  public eliminarAtleta(idAtleta: number):Observable<void>{
    console.log(`${this.apiUrl}/eliminar/${idAtleta}`);
    return this.httpClient.delete<void>(`${this.apiUrl}/eliminar/${idAtleta}`);
  }


  

}
