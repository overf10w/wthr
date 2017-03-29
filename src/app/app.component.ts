import { Component } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';
import {WeatherService} from './weather.service';
// import {error} from "selenium-webdriver";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  title = 'Best weather APP EVER';

  selectedCity: City;
  errorMsg: any;
  forecast: any;

  cities = this.cityService.getCities();

  constructor(private cityService: CityService, private weatherService: WeatherService) { }

  onSelect(city: City): void {
    this.selectedCity = city;
    console.log(this.selectedCity.name + ' selected');
    this.weatherService.getWeather(this.selectedCity.latitude, this.selectedCity.longitude)
                       .subscribe(
                         data => {
                           this.forecast = data;
                           console.log(this.forecast);
                         }, error => this.errorMsg = <any>error);
  }
}
