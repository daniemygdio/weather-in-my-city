import { CityWeather } from './cityweather';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: CityWeather;
  city: string = "";
  lastCity: string = "";
  isTyping: boolean = false;

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.getWeather()
  }

  getWeather(): void {
    this.service.getWeather(this.city)
      .subscribe(
        result => this.currentWeather = result,
        error => console.log("Error: " + error)
      )
  }

  keyPress(): void {
    this.isTyping = false;
  }

  onEnter(value: string) { this.city = value; this.getWeather(); this.isTyping = true;}

}
