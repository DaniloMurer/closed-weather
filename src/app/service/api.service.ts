import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_KEY = '10d503f6b26b8edaa17f7c5a58d8e73e';

  constructor(private http: HttpClient) { }

  public getTestData(): Observable<object> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=Chur&units=metric&appid=${this.API_KEY}`);
  }

  public getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.API_KEY}`)
  }
}
