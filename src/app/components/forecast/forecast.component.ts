import { Component, Input, OnInit } from '@angular/core';
import { DtoForecastWeater, List, Temp } from '../../models/DTO/DtoForecast';
import { GraphTemp } from '../../models/GraphTemp';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent implements OnInit {




  @Input({required:true}) forecast : DtoForecastWeater | undefined

  constructor(){
    
  }

  ngOnInit(): void {
    
    
  }

  showXAxis: boolean = true;
  showYAxis: boolean = true;

  colorShecheme = {
    domain:[
      '#FF1515'
    ]
  }
  
  temperatures : number[] =[];
  grapTemp : GraphTemp | undefined

  public url: string = 'https://openweathermap.org/img/wn/';
  public url2: string = '2x.png';

  getDate(date:number){
    return new Date(date*1000)
  }

 
  
}
