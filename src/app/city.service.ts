import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { City } from './city';

@Injectable()
export class CityService {
  city: City[];
  constructor (private http: Http) {}

  // <City[]> casting not needed. map() works with one el of sequence at a time (not the whole sequence)
  // Here, that one element happens to be an array of City - check cities.json
  getCities(): Observable<City[]> {
    return this.http.get('../api/cities.json')
    // TODO make an app consume original cities.json (1)
    // TODO change City model first and then map each el of response.json().data to become City object (0)
      .map((response: Response) => <City[]>response.json().data)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  // private extractData(res: Response): City[] {
  //   console.log(res.json());
  //   this.city = new Forecast();
  //
  //   this.forecast.dailySummary = res.json().daily.summary;
  //   this.forecast.hourlySummary = res.json().hourly.summary;
  //   this.forecast.currentlySummary = res.json().currently.summary;
  //
  //   return this.forecast;
  // }

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
