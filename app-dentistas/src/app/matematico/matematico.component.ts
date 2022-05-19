import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit, OnChanges {
  @Input() numero1 : number = 0;
  @Input() numero2 : number = 0;
  @Input() operacion : string = "";

  @Output() buttonClicked = new EventEmitter<boolean>();

  public resultado : number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // Agregar una validación si el valor recibido es negativo para numero1 o numero 2
    // considere en 0 el valor de entrada
    const numero1 = changes['numero1'];
    const numero2 = changes['numero2'];

    if(numero1.currentValue < 0)
      this.numero1 = 0;

    if(numero2.currentValue < 0)
      this.numero2 = 0;
  }

  ngOnInit(): void {
    /*switch(this.operacion){
      case "+":
        this.resultado = this.numero1 + this.numero2;
        break;
      case "-":
        this.resultado = this.numero1 - this.numero2;
        break;
      case "*":
        this.resultado = this.numero1 * this.numero2;
        break;
      case "/":
        this.resultado = this.numero1 / this.numero2;
        break;
    }*/
  }

  /*ngOnChanges(changes){
    this.ejecutarOperacion();
  }*/

  ejecutarOperacion() {
    switch(this.operacion){
      case "+":
        this.resultado = this.numero1 + this.numero2;
        break;
      case "-":
        this.resultado = this.numero1 - this.numero2;
        break;
      case "*":
        this.resultado = this.numero1 * this.numero2;
        break;
      case "/":
        this.resultado = this.numero1 / this.numero2;
        break;
    }
  }

  // Se puede realizar la emisión del evento desde una función en caso de que se necesite hacer otras
  // funciones al momento de emitir el evento
  emitirEvento() {
    this.buttonClicked.emit(true);
    this.ejecutarOperacion();
    // other stuff
  }


}
