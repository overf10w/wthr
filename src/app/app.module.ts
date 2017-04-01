import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CityService } from './services/city.service';
import { WeatherService } from './services/weather.service';

import { AppComponent }  from './app.component';
import { CityDetailsComponent } from './city-details.component';
import { ForecastDetailsComponent } from './forecast-details.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CityDetailsComponent, ForecastDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CityService, WeatherService ]
})
export class AppModule { }
