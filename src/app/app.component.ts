import {Component, OnInit} from '@angular/core';
import {ApiService} from './service/api.service';
import {FormControl} from "@angular/forms";
import {Weather} from "../data/weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClosedWeather';
  weatherDataArray = new Array<Weather>();

  cityName: FormControl = new FormControl('');
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getTestData().subscribe((data) => {
      this.weatherDataArray.push(data);
    });
  }

  roundTemperature(temp: number): number {
    return Math.ceil(temp);
  }

  addWeatherData(): void {
    console.log(this.cityName.value);
    this.apiService.getWeatherByCity(this.cityName.value).subscribe((data) => {
      this.weatherDataArray.push(data);
    });
  }


}
