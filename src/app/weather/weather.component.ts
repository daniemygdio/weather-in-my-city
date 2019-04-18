import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.service.getWeather("London");
  }

}
