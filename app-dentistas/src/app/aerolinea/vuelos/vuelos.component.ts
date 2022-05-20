import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VueloService } from 'src/app/services/vuelo.service';
import { IVuelo } from 'src/app/shared/interfaces/IVuelos';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit, OnChanges {

  //private vueloService : VueloService;
  vuelos : IVuelo[] = [];
  numeroVuelo: number = 0;
  fecha : string = '';
  horario : string = '';
  origen : string = '';
  destino : string = '';

  constructor(private vueloService : VueloService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getVuelos();
  }

  ngOnInit(): void {
    this.getVuelos();
  }

  getVuelos(){
    this.vueloService.getVuelos().subscribe(data => this.vuelos = data);
  }

  insertVuelo() {
    let vuelo : IVuelo = {
      numeroVuelo: this.numeroVuelo,
      fecha : this.fecha,
      horario : this.horario,
      origen: this.origen,
      destino: this.destino
    };
    this.vueloService.addVuelo(vuelo).subscribe(response => this.vuelos.push(response));
    //this.getVuelos();
    this.numeroVuelo = 0;
    this.fecha = '';
    this.horario = '';
    this.origen = '';
    this.destino = '';
  }

}
