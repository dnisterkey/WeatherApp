import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from './weather-service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit {

  private subscription: Subscription;
  city: string;
  suggestCities: any[];
  weatherData: any;
  constructor(private  weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather() {
    this.subscription = this.weatherService.getWeather(this.city).subscribe(result => {
      this.weatherData = result.json();
      this.subscription.unsubscribe();
    });
  }

  getSuggestedCities() {
    this.subscription = this.weatherService.searchCity(this.city).subscribe( result => {
      this.suggestCities = result;
      this.subscription.unsubscribe();
    });
  }

  onCityChange() {
    if (this.city != null && this.city.length >= 2) {
      // this.getSuggestedCities();
    }
    console.log(this.suggestCities);
  }

  onSearch() {
    this.getWeather();
    console.log(this.weatherData);
  }
}
