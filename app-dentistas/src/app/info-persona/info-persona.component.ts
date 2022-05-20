import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import { Persona } from '../shared/interfaces/Persona';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.css']
})
export class InfoPersonaComponent implements OnInit, OnDestroy, OnChanges {
  personas : Persona[] = [];

  constructor( private personaService : PersonasService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Se recibieron datos de entrada');
    console.log('changes', changes);
  }

  ngOnDestroy(): void {
    console.log('Se destruyó el componente info-persona');
  }

  ngOnInit() {
    // this.personasService.getPersonas() regresa un observable objeto al que se puede subscribir (subscribe)
    /*this.personas = this.personasService.getPersonas().subscribe({
      next: (data) => {
        this.personas = data
      }
    })*/

    this.personaService.getPersonas().subscribe(response => this.personas = response);

  }

  @Input() nombre : string = "";
  @Input() apellido : string = "";

}
