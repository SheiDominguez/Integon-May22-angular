import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Es necesario importar el FormsModule para poder hacer el binding de las propiedades con los inputs
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { UtileriasModule } from './utilerias/utilerias.module'
import { SharedModule } from './shared/shared.module'
import { AerolineaModule } from './aerolinea/aerolinea.module'

import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo'
import { Tercero, Cuarto } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';
import { VuelosComponent } from './aerolinea/vuelos/vuelos.component'

import { RouterModule, Routes } from '@angular/router';
import { DemoutileriasComponent } from './utilerias/demoutilerias/demoutilerias.component';
import { DetallePersonasComponent } from './detalle-personas/detalle-personas.component';

const routes: Routes = [
  { path: 'demoutilerias', component: DemoutileriasComponent },
  { path: 'personas', component: InfoPersonaComponent },
  { path: 'personas/detallepersonas/:id/:nombre', component: DetallePersonasComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    Cuarto,
    QuintoComponent,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
    DetallePersonasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    SharedModule,
    UtileriasModule,
    AerolineaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class ModuleOne { }
