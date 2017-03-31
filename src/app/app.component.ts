import {Component, OnInit} from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';
import { WeatherService } from './weather.service';
import { Forecast } from './forecast';
// import {error} from "selenium-webdriver";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Best weather APP EVER';

  cities: City[];
  selectedCity: City;
  selectedForecast: Forecast;
  errorMsg: any;

  constructor(private cityService: CityService, private weatherService: WeatherService) { }

  ngOnInit() { this.getCities(); }

  getCities() {
    this.cityService.getCities()
      .subscribe(
        cities => {
          this.cities = cities;
          console.log(this.cities);
        },
        error => this.errorMsg = <any>error
      );
  }

  onSelect(city: City): void {
    this.selectedCity = city;
    this.weatherService.getWeather(this.selectedCity.lat, this.selectedCity.lon)
                       .subscribe(
                         data => {
                           this.selectedForecast = data;
                         }, error => this.errorMsg = <any>error);
  }
}
