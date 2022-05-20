import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { VuelosComponent } from './vuelos/vuelos.component';



@NgModule({
  declarations: [VuelosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ VuelosComponent ]
})
export class AerolineaModule { }
