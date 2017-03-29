import { Component } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';
import { WeatherService } from './weather.service';
import { Forecast } from './forecast';
// import {error} from "selenium-webdriver";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent  {
  title = 'Best weather APP EVER';

  selectedCity: City;
  errorMsg: any;
  selectedForecast: Forecast;

  cities = this.cityService.getCities();

  constructor(private cityService: CityService, private weatherService: WeatherService) { }

  onSelect(city: City): void {
    this.selectedCity = city;
    // console.log(this.selectedCity.name + ' selected');
    this.weatherService.getWeather(this.selectedCity.latitude, this.selectedCity.longitude)
                       .subscribe(
                         data => {
                           // console.log(data.dailySummary);

                           // this.selectedForecast = data;
                           // console.log(this.selectedForecast.dailySummary);

                           this.selectedForecast = data;
                           // console.log(this.selectedForecast.dailySummary);
                           // console.log(this.selectedForecast.hourlySummary);

                           // console.log(this.forecast.dailySummary);
                         }, error => this.errorMsg = <any>error);
  }
}
