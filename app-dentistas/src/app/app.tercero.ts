import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercero',
  template: `<h1>Este es el componente tercero {{texto}}</h1>`,
})
export class Tercero {
  texto = 'efgh';
}


@Component({
  selector: 'app-cuarto',
  template: `<h1>Este es el cuarto componente {{texto}}</h1>`,
})
export class Cuarto implements OnInit {
  ngOnInit(): void {
    console.log('OnInit en cuarto componente');
  }
  texto = 'ijkl';
}
