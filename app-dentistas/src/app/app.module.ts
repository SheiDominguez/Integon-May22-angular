import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Es necesario importar el FormsModule para poder hacer el binding de las propiedades con los inputs
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    Cuarto,
    QuintoComponent,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    UtileriasModule,
    AerolineaModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class ModuleOne { }
