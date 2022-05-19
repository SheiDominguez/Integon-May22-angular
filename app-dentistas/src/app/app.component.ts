import { Component } from '@angular/core';

@Component({
  selector: 'component-one',
  //templateUrl: './app.component.html',
  template: `
    <div class="card highlight-card card-small">
      <span>Author: {{ author }}</span>
      <span>Creation Date: {{ creationDate }}</span>
      <span>Location: {{ location }}</span>
    </div>
    <button (click)="demo()">Demo</button>


    <h3>info-persona component</h3>
    <app-info-persona nombre="Sheila Gudalupe" [apellido]="'Dominguez Jimenez'"></app-info-persona>


    <h3>matematico component</h3>
    <h4>appMath1</h4>
    <app-matematico #appMath1 [numero1]="-2" [numero2]="52" operacion="*" (buttonClicked)="onClick($event)"></app-matematico>
    <span>{{appMath1.numero1}} {{appMath1.operacion}} {{appMath1.numero2}} = {{ appMath1.resultado }}</span>
    <!-- Con la referencia #alias solo se puede acceder a las propiedades marcadas como publicas -->
    <h4>appMath2</h4>
    <app-matematico #appMath2 [numero1]="35" [numero2]="12" operacion="+" (buttonClicked)="onClick($event)"></app-matematico>
    <span>{{appMath2.numero1}} {{appMath2.operacion}} {{appMath2.numero2}} = {{ appMath2.resultado }}</span>

    <h3>Directivas</h3>
    <h4>ngIf</h4>
    <p *ngIf="author == 'Sheila'; else noSeCumple">Se cumplio la condición</p>
    <ng-template #noSeCumple>
      <p>No se cumplio la condición</p>
    </ng-template>

    <h4>ngFor</h4>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Ciudad</th>
          <th>Moneda</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let persona of personas; index as myIndex">
          <td>{{myIndex + 1}}</td>
          <td>{{persona.nombre | uppercase}}</td>
          <td>{{persona.apellido | slice:0:3}}</td>
          <td>{{persona.ciudad | uppercase}}</td>
          <td>{{persona.moneda | currency:'EUR'}}</td>
        </tr>
      </tbody>
    </table>

  `,
  styleUrls: ['./app.component.css']
})
export class ComponentOne {
  title = 'app-dentistas';
  author = 'Sheila Dominguez';
  creationDate = '17-05-2022';
  location = 'Villahermosa, Tabasco';

  public personas = [
    {id: 1, nombre: "Sheila", apellido: "Dominguez", ciudad: "Villahermosa", moneda: '10000'},
    {id: 2, nombre: "Teresita", apellido: "Dominguez", ciudad: "Villahermosa", moneda: '12000'},
    {id: 3, nombre: "Enriqueta", apellido: "Jimenez", ciudad: "Villahermosa", moneda: '15000'}
  ];

  demo() : void {
    this.author = 'Modificado con el click handler';
  }

  onClick($event) {
    console.log($event);
    if($event)
      window.alert('Se presionó bien el botón');
    else
      window.alert('Se presionó mal el botón');
  }
}
