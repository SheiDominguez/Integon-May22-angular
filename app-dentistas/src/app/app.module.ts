import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo'
import { Tercero, Cuarto } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component'

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class ModuleOne { }
