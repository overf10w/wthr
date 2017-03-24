import { Component, Input } from '@angular/core';

import { City } from './city';

@Component({
  selector: 'city-details',
  templateUrl: './city-details.component.html'
})
export class CityDetailsComponent {
  @Input() city: City;
}
