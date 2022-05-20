import { Injectable } from '@angular/core';
import { Persona } from '../shared/interfaces/Persona';
// No existe el decorador service, si no que se cambia por el @Injectable
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  getPersonas() : Persona[] {
    let personas : Persona[] = [
      {id: 1, nombre: "Sheila", apellido: "Dominguez", ciudad: "Villahermosa", moneda: 10000},
      {id: 2, nombre: "Teresita", apellido: "Madrigal", ciudad: "Aguascalientes", moneda: 12000},
      {id: 3, nombre: "Enriqueta", apellido: "Jimenez", ciudad: "Mexico", moneda: 15000},
      {id: 4, nombre: "Antonio", apellido: "Lopez", ciudad: "Monterrey", moneda: 15000},
      {id: 5, nombre: "Rigoberto", apellido: "Ramirez", ciudad: "Tuxtla Gutierrez", moneda: 20000}
    ];

    return personas;
  }

}
