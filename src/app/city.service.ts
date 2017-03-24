import { Injectable } from '@angular/core';

import { City } from './city';
import { CITIES } from './cities';

@Injectable()
export class CityService {
  getCities(): City[] {
    return CITIES;
  }
}
