import { Component, Input } from '@angular/core';
import { DtoForecastWeater } from '../../models/DTO/DtoForecast';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {

  @Input({required:true}) forecast : DtoForecastWeater | undefined


  public url: string = 'https://openweathermap.org/img/wn/';
  public url2: string = '2x.png';
}
