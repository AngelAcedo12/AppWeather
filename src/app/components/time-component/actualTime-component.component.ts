import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DtoWheaterByLocation } from '../../models/DTO/DtoWheaterByLocation';

@Component({
  selector: 'app-actual-time-component',
  templateUrl: './actualTime-component.component.html',
  styleUrl: './actualTime-component.component.css'
})
export class TimeComponentComponent implements OnChanges {

  @Input({required:true}) wheater : DtoWheaterByLocation | undefined
  
  ngOnChanges(changes: SimpleChanges): void {
   

  
    
  }
  
  public url: string = 'https://openweathermap.org/img/wn/';
  public url2: string = '2x.png';

}
