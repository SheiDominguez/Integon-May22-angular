import { Component, OnInit } from '@angular/core';
import { PersonasService } from './services/personas.service'
import { Persona } from './shared/interfaces/Persona';

@Component({
  selector: 'component-one',
  templateUrl: './app.component.html',
  /*template: `
    <router-outlet></router-outlet>

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
    Con la referencia #alias solo se puede acceder a las propiedades marcadas como publicas
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
        <tr *ngFor="let persona of personas | sort : 'ciudad':'desc'; index as myIndex">
          <td>{{myIndex + 1}}</td>
          <td>{{persona.nombre | uppercase}}</td>
          <td>{{persona.apellido | slice:0:3}}</td>
          <td>{{persona.ciudad | uppercase}}</td>
          <td>{{persona.moneda | currency:'EUR'}}</td>
        </tr>
      </tbody>
    </table>

    <h4>Custom directives</h4>
    <p appCopyright></p>
    <input type="text" appNumeric />

    <div *appPermission="['admin', 'agent']">
      <p>Directiva de permisos</p>
    </div>

    <app-demoutilerias></app-demoutilerias>

    Dato: <input type="text" id="txtDato" [(ngModel)]="dato">
    {{dato}}

    <app-vuelos></app-vuelos>
  `,*/
  styleUrls: [
    './app.component.css'
  ],
  providers: [
    PersonasService
  ]
})
export class ComponentOne implements OnInit {
  title = 'app-dentistas';
  author = 'Sheila Dominguez';
  creationDate = '17-05-2022';
  location = 'Villahermosa, Tabasco';
  personas : Persona[] = [];
  dato : string = '';

  constructor(private personaService : PersonasService) { }

  ngOnInit() {
    // this.personasService.getPersonas() regresa un observable objeto al que se puede subscribir (subscribe)
    /*this.personas = this.personasService.getPersonas().subscribe({
      next: (data) => {
        this.personas = data
      }
    })*/

    this.personaService.getPersonas().subscribe(response => this.personas = response);

  }

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
