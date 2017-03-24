import { Component } from '@angular/core';
import { CITIES } from './cities';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  title = 'Best weather APP EVER';
  cities = CITIES;
}
