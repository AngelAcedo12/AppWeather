import { Component, inject, Input } from '@angular/core';
import { WeaterService } from '../../services/weater.service';
import { GraphTemp } from '../../models/GraphTemp';
import { DtoForecastWeater } from '../../models/DTO/DtoForecast';

@Component({
  selector: 'app-temp-graph',
  templateUrl: './temp-graph.component.html',
  styleUrl: './temp-graph.component.css'
})
export class TempGraphComponent {

  private weaterService = inject(WeaterService)

 
    temperaturas : GraphTemp[] | undefined
    dayTemp: GraphTemp[] | undefined
   constructor(){

    this.temperaturas=this.getTemperatures()
    this.dayTemp=this.getDayTemp()
    console.log(this.temperaturas)
   }
  view = [400, 400];
  colorShecheme = {
    domain:[
      '#FF1515'
    ]
  }

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabelTemp: string = 'Temperaturas ';
  xAxisLaberDayTemp: string = 'Temperaturas durate el dia';
  showYAxisLabel: boolean = true;

  getDayTemp(){
    const temp = this.weaterService.searchForecast()
    if(temp==undefined) return ;
    var listTemp : GraphTemp[] = []
    listTemp=  temp.list.map((day) => {
      let newDay: GraphTemp = {
        name: new Date(day.dt*1000).toLocaleDateString(),
        series:[
          {
            name:"Day",
            value:day.temp.day
          },
          {
            name:"Morn",
            value:day.temp.morn
          },
          {
            name:"Night",
            value:day.temp.night
          },
        
        ]
        
      }
      return newDay
    
    }

    )
    return listTemp
  }
  
  getTemperatures(){
    const temp = this.weaterService.searchForecast()
    if(temp==undefined) return ;
    var listTemp : GraphTemp[] = []
    listTemp=  temp.list.map((day) => {
      let newDay: GraphTemp = {
        name: new Date(day.dt*1000).toLocaleDateString(),
        series:[
          {
            name:"Min",
            value:day.temp.min
          },
          {
            name:"Max",
            value:day.temp.max
          },
        
        ]
        
      }
      return newDay
    
    }

    )
    return listTemp
  }
 }
