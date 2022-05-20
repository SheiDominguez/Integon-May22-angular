import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Persona } from '../shared/interfaces/Persona';
// No existe el decorador service, si no que se cambia por el @Injectable
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private getEndPoint = 'http://localhost:3005/personas';
  constructor(private http : HttpClient) {
  }

  /*getPersonas() : any {
    /*let personas : Persona[] = [
      {id: 1, nombre: "Sheila", apellido: "Dominguez", ciudad: "Villahermosa", moneda: 10000},
      {id: 2, nombre: "Teresita", apellido: "Madrigal", ciudad: "Aguascalientes", moneda: 12000},
      {id: 3, nombre: "Enriqueta", apellido: "Jimenez", ciudad: "Mexico", moneda: 15000},
      {id: 4, nombre: "Antonio", apellido: "Lopez", ciudad: "Monterrey", moneda: 15000},
      {id: 5, nombre: "Rigoberto", apellido: "Ramirez", ciudad: "Tuxtla Gutierrez", moneda: 20000}
    ];

    const request$ = new Observable(observer => {
      const request = new XMLHttpRequest();

      request.addEventListener("load", () => {
        if(request.readyState == 4 && request.status == 200) {
          observer.next(JSON.parse(request.responseText));
          observer.complete();
        } else {
          observer.error('An error has occured');
        }
      });
      request.open("GET", this.getEndPoint);
      request.send();
    });
    return request$;
  }*/

  getPersonas() : Observable<Persona[]> {
    return this.http.get<Persona[]>(this.getEndPoint).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Ocurrió un error ${error}`);
        return throwError(error);
      })
    );
  }

}
