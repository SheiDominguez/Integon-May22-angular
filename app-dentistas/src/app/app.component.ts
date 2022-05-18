import { Component } from '@angular/core';

@Component({
  selector: 'component-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ComponentOne {
  title = 'app-dentistas';
  author = 'Sheila Dominguez';
  creationDate = '17-05-2022';
  location = 'Villahermosa, Tabasco';
}
