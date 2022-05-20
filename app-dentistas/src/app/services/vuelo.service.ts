import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVuelo } from '../shared/interfaces/IVuelos'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  public vuelosList : IVuelo[] = [];
  private endPoint = 'http://localhost:3005/vuelos';

  constructor(private http : HttpClient) { }

  getVuelos () : Observable<IVuelo[]> {
    return this.http.get<IVuelo[]>(this.endPoint);
  }

  addVuelo(vuelo : IVuelo): Observable<IVuelo> {
    return this.http.post<IVuelo>(this.endPoint, vuelo);
  }
}
