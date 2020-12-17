import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input() weatherData: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.weatherData)
  }

}
