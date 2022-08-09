import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoAtleta } from '../modelo/InfoAtleta';

@Injectable({
  providedIn: 'root'
})
export class InfoAtletaService {

 private apiUrl = 'http://localhost:8080/infoAtleta'

  constructor(private httpClient: HttpClient) { }

  public listarInfo():Observable<InfoAtleta[]>{
    console.log(`${this.apiUrl}/listarInfo`);
    return this.httpClient.get<InfoAtleta[]>(`${this.apiUrl}/listarInfo`);
  }

  public buscarInfo(idAtleta: number): Observable<InfoAtleta>{
    console.log(`${this.apiUrl}/buscarInfo/${idAtleta}`);
    return this.httpClient.get<InfoAtleta>(`${this.apiUrl}/buscarInfo/${idAtleta}`);
  }

  public guardarInfo(infoAtleta: InfoAtleta): Observable<InfoAtleta>{
    console.log(`${this.apiUrl}/guardarInfo`);
    console.log(infoAtleta);
    return this.httpClient.post<InfoAtleta>(`${this.apiUrl}/guardarInfo`,infoAtleta);
  }

  public eliminarInfoAtleta(idAtleta: number):Observable<void>{
    console.log(`${this.apiUrl}/eliminarInfo/${idAtleta}`);
    return this.httpClient.delete<void>(`${this.apiUrl}/eliminarInfo/${idAtleta}`);
  }

}
