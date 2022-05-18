import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // Por default las propiedades son publicas, en caso de declarar una propiedad como privada (private)
  // el intellisense no la autocompletará y marcara error en la vista aunque no afecte
  // la funcionalidad y son para uso dentro de la clase.
  title = 'The second one';
  developer = 'Sheila Guadalupe Domínguez Jiménez';
  demoIntellisense = 'Prueba de intellisense';
}
