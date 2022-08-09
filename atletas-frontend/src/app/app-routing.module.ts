import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletaComponent } from './components/atleta/atleta.component';
import { InfoAtletaComponent } from './components/info-atleta/info-atleta.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'atleta', component: AtletaComponent},
      {path: 'infoAtleta/:idAtleta/:nombre/:apellido/:identificacion', component: InfoAtletaComponent}
    ]

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
