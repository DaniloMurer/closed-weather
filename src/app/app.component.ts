import {Component, OnInit} from '@angular/core';
import {ApiService} from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'closed-weather';
  weatherData: any;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getTestData().subscribe((data) => {
      console.log(data);
      this.weatherData = data;
    });
  }


}
