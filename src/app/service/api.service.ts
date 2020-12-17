import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Weather} from "../../data/weather";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_KEY = '10d503f6b26b8edaa17f7c5a58d8e73e';

  constructor(private http: HttpClient) { }

  public getTestData(): Observable<Weather> {
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=Chur&units=metric&appid=${this.API_KEY}`);
  }

  public getWeatherByCity(city: string): Observable<Weather> {
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.API_KEY}`)
  }
}
