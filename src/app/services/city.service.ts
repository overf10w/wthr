import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { City } from '../city';

@Injectable()
export class CityService {
  constructor (private http: Http) {}

  // <City[]> casting not needed. map() works with one el of sequence at a time (not the whole sequence)
  // Here, that one element happens to be an array of City - check cities.json
  getCities(): Observable<City[]> {
    return this.http.get('../api/cities.json')
      .map(this.extractData)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  // TODO for...in, lodash, etc
  private extractData(res: Response): City[] {
    let citiesObj = res.json();

    let citiesArr = Object.keys(citiesObj).map(function (key) {
      let city = new City();
      city.latitude = citiesObj[key].lat;
      city.longitude = citiesObj[key].lon;
      city.name = citiesObj[key].city;
      return city;
    });
    return citiesArr;
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
