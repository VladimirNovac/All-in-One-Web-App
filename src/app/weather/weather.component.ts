import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from "../../providers/weather/weather";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  displayCity: string = "Galway";
  displayTemperature: string = "";
  displayFeelsLike: string = "";
  displayWeather: string = "";
  displayDescription: string = "";
  displayTempMin: string = "";
  displayTempMax: string = "";
  displayHumidity: string = "";
  displayWindDeg: string = "";
  displayWindSpeed: string = "";
  displaySunriseData: number = 0;
  displaySunrise: string = "";
  displaySunsetData: number = 0;
  displaySunset: string = "";
  displayIcon: string = "";
  units: string = "metric";
  countryCode: string = "";

  constructor(private weather:WeatherProvider) { }

  ngOnInit(): void {
    this.weather.getWeather(this.displayCity, this.units).subscribe(data => {
      this.displayTemperature = data.main.temp;
      this.displayFeelsLike = data.main.feels_like;
      this.displayWeather = data.weather[0].main;
      this.displayDescription = data.weather[0].description;
      this.displayTempMin = data.main.temp_min;
      this.displayTempMax = data.main.temp_max;
      this.displayHumidity = data.main.humidity;
      this.displayWindDeg = data.wind.deg;
      this.displayWindSpeed = data.wind.speed;
      
      this.displaySunriseData = data.sys.sunrise;
      this.displaySunsetData = data.sys.sunset;
      var date = new Date(this.displaySunriseData * 1000);
      this.displaySunrise = date.toLocaleTimeString();
      date = new Date(this.displaySunsetData * 1000);
      this.displaySunset = date.toLocaleTimeString();
      
      this.displayIcon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      this.countryCode = data.sys.country;
       
    }, (error) => {
      console.log("City Not Found!!!");
      this.displayTemperature = "";
      this.displayFeelsLike = "";
      this.displayWeather = "";
      this.displayDescription = "";
      this.displayIcon = "";
      this.countryCode = "";
    });
  }

}
