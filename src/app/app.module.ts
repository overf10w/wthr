import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CityService} from './city.service';
import {CityDetailsComponent} from './city-details.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CityDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CityService ]
})
export class AppModule { }
