import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPersonaComponent } from '../info-persona/info-persona.component'
import { VuelosComponent } from '../aerolinea/vuelos/vuelos.component'

const routes: Routes = [
  /*{ path: 'personas', component: InfoPersonaComponent },
  { path: 'vuelos', component: VuelosComponent }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacionRoutingModule { }
