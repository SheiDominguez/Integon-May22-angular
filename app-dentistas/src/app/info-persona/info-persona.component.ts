import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.css']
})
export class InfoPersonaComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Se recibieron datos de entrada');
    console.log('changes', changes);
  }

  ngOnDestroy(): void {
    console.log('Se destruyó el componente info-persona');
  }

  ngOnInit(): void {
    console.log('Se inicializo el componente info-persona');
  }

  @Input() nombre : string = "";
  @Input() apellido : string = "";

}
