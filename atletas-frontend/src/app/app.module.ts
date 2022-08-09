import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtletaServiceService } from './service/atleta-service.service';
import { AtletaComponent } from './components/atleta/atleta.component';
import { InfoAtletaComponent } from './components/info-atleta/info-atleta.component';
import { InfoAtletaService } from './service/info-atleta.service';
import { PasoInformacionService } from './components/paso-informacion.service';

@NgModule({
  declarations: [
    AppComponent,
    AtletaComponent,
    InfoAtletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AtletaServiceService,InfoAtletaService,PasoInformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
