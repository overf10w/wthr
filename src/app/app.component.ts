import { Component } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  title = 'Best weather APP EVER';

  constructor(private cityService: CityService) { }

  cities = this.cityService.getCities();
}
