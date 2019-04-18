import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const AAPID: string = "f098a2d85edf9750bdd71387f5353145";

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(city: string) {
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=" + AAPID).
      map((response) => response.json()).
      subscribe((data) => console.log(data))
  }

}
