import { CityWeather } from './cityweather';
import { Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

const AAPID: string = "f098a2d85edf9750bdd71387f5353145";

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(city: string): Observable<CityWeather> {
    return this.http
      .get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=" + AAPID)
      .map((response: Response) => {
        return <CityWeather>response.json();
      }).catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
