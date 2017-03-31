import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { City } from './city';

@Injectable()
export class CityService {
  // city: City[];
  constructor (private http: Http) {}

  // <City[]> casting not needed. map() works with one el of sequence at a time (not the whole sequence)
  // Here, that one element happens to be an array of City - check cities.json
  getCities(): Observable<City[]> {
    return this.http.get('../api/cities.json')
    // TODO make an app consume original cities.json (0)
      .map(this.extractData)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private extractData(res: Response): City[] {
    return res.json().data.map(function (item: any) {
      let city = new City();

      city.name = item.name;
      city.latitude = item.lat;
      city.longitude = item.lon;

      return city;
    });
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
