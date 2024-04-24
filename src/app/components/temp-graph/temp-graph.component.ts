import { Component, inject, Input } from '@angular/core';
import { WeaterService } from '../../services/weater.service';
import { GraphTemp } from '../../models/GraphTemp';
import { DtoForecastWeater, List } from '../../models/DTO/DtoForecast';

@Component({
  selector: 'app-temp-graph',
  templateUrl: './temp-graph.component.html',
  styleUrl: './temp-graph.component.css'
})
export class TempGraphComponent {

  private weaterService = inject(WeaterService)

 
    temperaturas : GraphTemp[] | undefined
   
   constructor(){

    this.temperaturas=this.getTemperatures()

    this.xAxisLabelTemp=this.weaterService.searchForecast()?.city.name 
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
  xAxisLabelTemp: string | undefined;
  xAxisLaberDayTemp: string = 'Dias';
  yAxisLaberDayTemp:string = "Grados"
  showYAxisLabel: boolean = true;

  
  getTemperatures(){
    const temp = this.weaterService.searchForecast()
    if(temp==undefined) return  ;
    var listGraph: GraphTemp[] = []
    var media : GraphTemp = {
      name:"Media",
      series: this.getMedia(temp.list)
    }    
    var min : GraphTemp = {
      name: "Minima",
      series: this.getMinima(temp.list)
    }
    var max : GraphTemp={
      name:"Maxima",
      series: this.getMaxima(temp.list)
    }
    listGraph.push(max,min,media)
 

    return listGraph
    
    }
    getMaxima(temp:List[]){
      return temp.map(day => {
        return {
          name:new Date(day.dt*1000).toLocaleDateString(),
          value:day.temp.max
        }
      })
    }

    getMedia(temp:List[]){

      return temp.map(day => {
          return {
            name:new Date(day.dt*1000).toLocaleDateString(),
            value:day.temp.eve
          }
      })

    }
    getMinima(temp: List[]){
      return temp.map(day => {
        return {
          name: new Date(day.dt*1000).toLocaleDateString(),
          value:day.temp.min
        }
      })
    }

    

  }



 
