import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  title = 'Best weather APP EVER';
  cities: City[] = [
    { id: 1, name: 'Kiev' },
    { id: 2, name: 'London'},
    { id: 3, name: 'New York'}
  ];
}

export class City {
  id: number;
  name: string;
}
