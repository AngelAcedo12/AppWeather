 import { computed, Injectable, Signal, signal } from '@angular/core';
import { DtoWheaterByLocation } from '../models/DTO/DtoWheaterByLocation';
import { Coords } from '../models/Coords';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroments';
import { DtoForecastWeater } from '../models/DTO/DtoForecast';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaterService {

  constructor(private http : HttpClient) { 


  }


  

  public searchWheater : Signal<DtoWheaterByLocation | undefined> = signal(undefined)
  public searchForecast : Signal<DtoForecastWeater |  undefined> = signal(undefined)
  public notFound =signal(false) 


  private handlerEror(error:HttpErrorResponse){
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
     
    }
    
    // Return an observable with a user-facing error message.
    return throwError(() => {});
  }

  shearchWheaterByCoords(coords : Coords){
    this.searchWheater=computed(() => undefined)
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?lat=${coords.lat}&lon=${coords.lon}&appid=${enviroment.API_KEY}&units=metric`)
    .pipe(
      catchError(this.handlerEror)
    )
    .subscribe((data) => {
      this.searchWheater=computed(() => data)})
  }

  shearchWheaterByCity(city:string){
    this.searchWheater=computed(() => undefined)
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?q=${city}&appid=${enviroment.API_KEY}&units=metric`)
    .pipe(
      catchError(this.handlerEror)
    )
    .subscribe(data => {
      this.searchWheater=computed(() => data)})
  }

  forecatShearchByCords(coords:Coords){
  
   this.http.get<DtoForecastWeater>(`${enviroment.BASE_URL}forecast/daily?lat=${coords.lat}&lon=${coords.lon}&cnt=16&appid=${enviroment.SECOND_API_KEY}&units=metric`)
   .pipe(
    catchError(this.handlerEror)
  )
    .subscribe(data => {
      this.searchForecast=computed(() => data)
  })
  }
  forecatShearchByCity(city:string){
    this.http.get<DtoForecastWeater>(`${enviroment.BASE_URL}forecast/daily?q=${city}&cnt=16&appid=${enviroment.SECOND_API_KEY}&units=metric`)
    .pipe(
      catchError(this.handlerEror)
    )
     .subscribe(data => {
       this.searchForecast=computed(() => data)
   })
   }
}
