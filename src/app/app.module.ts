import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CityService} from './city.service';
import {CityDetailsComponent} from './city-details.component';
import {WeatherService} from './weather.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, CityDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CityService, WeatherService ]
})
export class AppModule { }
