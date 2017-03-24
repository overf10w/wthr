import { Component } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  title = 'Best weather APP EVER';

  selectedCity: City;

  constructor(private cityService: CityService) { }

  cities = this.cityService.getCities();

  onSelect(city: City): void {
    this.selectedCity = city;
    console.log(this.selectedCity.name + ' selected');
  }
}
