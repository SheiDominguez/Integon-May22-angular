import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  template: `
    <h1>Este es el componente ejemplo {{texto}}</h1>
    <app-tercero></app-tercero>
    <app-cuarto></app-cuarto>
    `,
})
export class Ejemplo {
  texto = 'abcd';
}
