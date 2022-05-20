import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-detalle-personas',
  templateUrl: './detalle-personas.component.html',
  styleUrls: ['./detalle-personas.component.css']
})
export class DetallePersonasComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  clavePersona: number = 0;
  nombre: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clavePersona = params['id'];
      this.nombre = params['nombre'];
    })
  }

}
