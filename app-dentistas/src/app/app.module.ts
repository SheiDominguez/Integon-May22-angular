import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentOne } from './app.component';

@NgModule({
  declarations: [
    ComponentOne
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class ModuleOne { }
