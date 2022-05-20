import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { VuelosComponent } from './vuelos/vuelos.component';



@NgModule({
  declarations: [VuelosComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ VuelosComponent ]
})
export class AerolineaModule { }
