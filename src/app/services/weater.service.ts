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

  forecatShearchByCords(coords:Coords){
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?lat=${coords.lat}&lon=${coords.lon}&appid=${enviroment.API_KEY}&units=metric`)
    .subscribe(data => {
    
      this.searchWheater=computed(() => data)})
  }
}
