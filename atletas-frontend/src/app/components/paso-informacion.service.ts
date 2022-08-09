import { EventEmitter, Injectable, Output } from '@angular/core';
import { Atleta } from '../modelo/Atleta';

@Injectable({
  providedIn: 'root'
})
export class PasoInformacionService {

  @Output() atleta: EventEmitter<any> = new EventEmitter();

  constructor() { }

 

  

}
