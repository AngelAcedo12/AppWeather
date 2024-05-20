 import { computed, Injectable, Signal, signal } from '@angular/core';
import { DtoWheaterByLocation } from '../models/DTO/DtoWheaterByLocation';
import { Coords } from '../models/Coords';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroments';
import { DtoForecastWeater } from '../models/DTO/DtoForecast';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from './notification-service.service';

@Injectable({
  providedIn: 'root'
})
export class WeaterService {

  constructor(private http : HttpClient, private notificatioService : NotificationService) { }

  public searchWheater : Signal<DtoWheaterByLocation | undefined> = signal(undefined)
  public searchForecast : Signal<DtoForecastWeater |  undefined> = signal(undefined)

  public notFound =false


  private handlerEror(error:HttpErrorResponse){
    this.notificatioService.openSnackBar({
      message: error.error.message,
      duration: 2000,
      closeMessage: 'Cerrar'
    })  
    this.notFound = true
    return throwError(() => {});
  }

  shearchWheaterByCoords(coords : Coords){
    this.searchWheater=computed(() => undefined)
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?lat=${coords.lat}&lon=${coords.lon}&appid=${enviroment.API_KEY}&units=metric`)
    .pipe(

      catchError( err => this.handlerEror(err))

    )
    .subscribe((data) => {
      this.searchWheater=computed(() => data)})
  }

  shearchWheaterByCity(city:string){
    this.searchWheater=computed(() => undefined)
    this.http.get<DtoWheaterByLocation>(`${enviroment.BASE_URL}weather?q=${city}&appid=${enviroment.API_KEY}&units=metric`)
    .pipe(
      catchError(err => this.handlerEror(err))
    )
    .subscribe(data => {
      this.searchWheater=computed(() => data)})
  }

  forecatShearchByCords(coords:Coords){
  
   this.http.get<DtoForecastWeater>(`${enviroment.BASE_URL}forecast/daily?lat=${coords.lat}&lon=${coords.lon}&cnt=16&appid=${enviroment.SECOND_API_KEY}&units=metric`)
   .pipe(
    catchError(err => this.handlerEror(err))
  )
    .subscribe(data => {
      this.searchForecast=computed(() => data)
  })
  }
  forecatShearchByCity(city:string){
    this.http.get<DtoForecastWeater>(`${enviroment.BASE_URL}forecast/daily?q=${city}&cnt=16&appid=${enviroment.SECOND_API_KEY}&units=metric`)
    .pipe(
      catchError(err => this.handlerEror(err))
    )
     .subscribe(data => {
       this.searchForecast=computed(() => data)
   })
   }
}
