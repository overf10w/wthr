import { Component, Input } from '@angular/core';

import {Forecast} from './forecast';

@Component({
  selector: 'forecast-details',
  templateUrl: './forecast-details.component.html'
})
export class ForecastDetailsComponent {
  @Input() forecast: Forecast;
}
