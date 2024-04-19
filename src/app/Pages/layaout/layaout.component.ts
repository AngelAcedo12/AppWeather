import { Component, inject, Injector, OnInit } from '@angular/core';
import { WeaterService } from '../../services/weater.service';
import { Coords } from '../../models/Coords';

@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.css'
})
export class LayaoutComponent implements OnInit{

  private weaterService : WeaterService = inject(WeaterService)



  ngOnInit(): void {
    
    this.getCurretLocation()  


  }




  shearchNewLocation(shearch:string){
      this.weaterService.shearchWheaterByCity(shearch)
      this.weaterService.forecatShearchByCity(shearch)
  }

  getCurretLocation()  {

     navigator.geolocation.getCurrentPosition((data) =>
      {

        this.weaterService.shearchWheaterByCoords({lat:data.coords.latitude,lon:data.coords.longitude})
        this.weaterService.forecatShearchByCords({lat:data.coords.latitude,lon:data.coords.longitude})
      }

    )
  

  }
}
