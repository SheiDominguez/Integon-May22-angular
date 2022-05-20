import { Component, OnInit } from '@angular/core';
import { VueloService } from 'src/app/services/vuelo.service';
import { IVuelo } from 'src/app/shared/interfaces/IVuelos';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  private vueloService : VueloService;
  vuelos : IVuelo[] = [];
  numeroVuelo: number = 0;
  fecha : string = '';
  horario : string = '';
  origen : string = '';
  destino : string = '';

  constructor() {
    this.vueloService = new VueloService();
  }

  ngOnInit(): void {
    this.getVuelos();
  }

  getVuelos(){
    this.vuelos = this.vueloService.getVuelos();
  }

  insertVuelo() {
    let vuelo : IVuelo = {
      numeroVuelo: this.numeroVuelo,
      fecha : this.fecha,
      horario : this.horario,
      origen: this.origen,
      destino: this.destino
    };
    this.vueloService.addVuelo(vuelo);
    this.getVuelos();
  }

}
