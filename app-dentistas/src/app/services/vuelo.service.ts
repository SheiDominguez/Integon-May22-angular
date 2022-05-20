import { Injectable } from '@angular/core';
import { IVuelo } from '../shared/interfaces/IVuelos'

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  public vuelosList : IVuelo[] = [];

  constructor() { }

  getVuelos () : IVuelo[] {
    return this.vuelosList;
  }

  addVuelo(vuelo : IVuelo) {
    this.vuelosList.push(vuelo);
  }
}
