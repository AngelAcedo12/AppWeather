 import { computed, Injectable, Signal, signal } from '@angular/core';
import { DtoWheaterByLocation } from '../models/DTO/DtoWheaterByLocation';
import { Coords } from '../models/Coords';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroments';
import { DtoForecastWeater } from '../models/DTO/DtoForecast';

@Injectable({
  providedIn: 'root'
})
export class WeaterService {

  constructor(private http : HttpClient) { 


  }


  

  public searchWheater : Signal<DtoWheaterByLocation | undefined> = signal(undefined)
  public searchForecast : Signal<DtoForecastWeater |  undefined> = signal(undefined)
   
  shearchWheaterByCoords(coords : Coords){
    this.searchWheater=computed(() => undefined)
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?lat=${coords.lat}&lon=${coords.lon}&appid=${enviroment.API_KEY}&units=metric`)
    .subscribe(data => {
    
      this.searchWheater=computed(() => data)})
  }

  shearchWheaterByCity(city:string){
    this.searchWheater=computed(() => undefined)
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?q=${city}&appid=${enviroment.API_KEY}&units=metric`)
    .subscribe(data => {
      this.searchWheater=computed(() => data)})
  }

  forecatShearchByCords(coords:Coords){
  
   this.http.get<DtoForecastWeater>(`${enviroment.BASE_URL}forecast/daily?lat=${coords.lat}&lon=${coords.lon}&cnt=16&appid=${enviroment.SECOND_API_JEy}&units=metric`)
    .subscribe(data => {
      
      this.searchForecast=computed(() => data)
  })
  }
  forecatShearchByCity(city:string){
    console.log(`${enviroment.BASE_URL}forecast/daily?q=${city}&cnt=16&appid=${enviroment.SECOND_API_JEy}&units=metric`)
    this.http.get<DtoForecastWeater>(`${enviroment.BASE_URL}forecast/daily?q=${city}&cnt=16&appid=${enviroment.SECOND_API_JEy}&units=metric`)
     .subscribe(data => {
       
       this.searchForecast=computed(() => data)
   })
   }
}
