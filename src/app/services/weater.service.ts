 import { computed, Injectable, Signal, signal } from '@angular/core';
import { DtoWheaterByLocation } from '../models/DTO/DtoWheaterByLocation';
import { Coords } from '../models/Coords';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class WeaterService {

  constructor(private http : HttpClient) { 


  }


  

  public searchWheater : Signal<DtoWheaterByLocation | undefined> = signal(undefined)
  
  
  shearchWheaterByCoords(coords : Coords){
    
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?lat=${coords.lat}&lon=${coords.lon}&appid=${enviroment.API_KEY}&units=metric`)
    .subscribe(data => {
    
      this.searchWheater=computed(() => data)})
  }

  shearchWheaterByCity(city:string){
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?q=${city}&appid=${enviroment.API_KEY}&units=metric`)
    .subscribe(data => {
      this.searchWheater=computed(() => data)})
  }

  /*forecatShearchByCords(coords:Coords){
    // https://api.openweathermap.org/data/2.5/forecast/daily?lat=40.3931&lon={lon}&cnt={cnt}&appid=
    this.http.get<DtoForecastWeater>(`${enviroment.BASE_URL_OPEN_WHEATER}city/fivedaysforcast/${coords.lat}/${coords.lon}`,{headers:{
      "X-RapidAPI-Key":enviroment.RAPID_API_KEY,
      "X-RapidAPI-Host":enviroment.RAPID_API_HOST
    }})
    .subscribe(data => {
      console.log(data)
      this.forecastWheater=computed(() => data)})
  }*/
}
