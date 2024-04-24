import { computed, Injectable, signal, Signal } from '@angular/core';
import { DtoLocation } from '../models/DTO/DtoLocation';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }


  searchLocation : Signal<DtoLocation | undefined > = signal(undefined)
  
  
  getLocation(place:string){
    this.searchLocation = computed(()=>undefined )
    this.http.get<DtoLocation>(enviroment.LOCATION_BASE_URL+`?q=${place}&limit=5&appid=${enviroment.SECOND_API_KEY}`,{
      
    }).subscribe(data => {this.searchLocation = computed(()=> data)})
  }

}
