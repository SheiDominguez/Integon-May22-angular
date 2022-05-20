import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoutileriasComponent } from './demoutilerias/demoutilerias.component'



@NgModule({
  declarations: [
    DemoutileriasComponent
  ],
  // Los modulos de los cuales consumimos alguna funcionalidad (Se importan los modulos)
  imports: [
    CommonModule
  ],
  // Se exportan los componentes. Los elementos (componentes, directivas, pipes)
  exports: [
    DemoutileriasComponent
  ],
  providers: [],
  bootstrap: []
})
export class UtileriasModule { }
