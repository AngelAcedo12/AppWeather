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
  goodDay =[
    "Picnic en el Parque",
    "Caminata Escénica",
    "Día en la Playa",
    "Visita a un Jardín Botánico",
    "Paseo en Bicicleta"
  ]
  badDay=[
    "Maratón de Películas o Series",
    "Cocinar o Hornear",
    "Tarde de Juegos de Mesa",
    "Practicar Pasatiempos Creativos",
    "Spa en Casa"
    
  ]
  
  public url: string = 'https://openweathermap.org/img/wn/';
  public url2: string = '2x.png';

}
