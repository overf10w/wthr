import { Component, Input } from '@angular/core';

import { City } from './city';

@Component({
  selector: 'city-details'
})
export class CityDetailsComponent {
  @Input() city: City;
}
