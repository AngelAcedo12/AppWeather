import { Component, inject, Injector, OnInit } from '@angular/core';
import { WeaterService } from '../../../../services/weater.service';
import { Coords } from '../../../../models/Coords';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from 'services/notification-service.service';

type status = 'granted' | 'denied' | 'prompt'
@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.css'
})
export class LayaoutComponent implements OnInit{

  private weaterService : WeaterService = inject(WeaterService)
  private notificationService : NotificationService = inject(NotificationService)
  private router = inject(ActivatedRoute)

  statusPermision : BehaviorSubject<status> = new BehaviorSubject<status>('prompt')

  ngOnInit(): void {
    this.setEventListerToGeolocation()
    this.statusPermision.subscribe((status) => {
      if(status == 'granted'){

        this.getCurretLocation()
        
        this.weaterService.setStatuPermision('granted')
        
        
      }
      if(status == 'denied'){
        this.notificationService.openSnackBar({
          message:'Permiso denegado',
          closeMessage:'Aceptar'
        
        })
        this.weaterService.setStatuPermision('denied')
      }
      if(status == 'prompt'){
        this.weaterService.setStatuPermision('prompt')
     
      }
    }
    )
    
    this.router.queryParams.subscribe((params) => {
      if(params['shearch']){
        this.shearchNewLocation(params['shearch'])
      }else{
        this.getCurretLocation()
      }
    })

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

  setEventListerToGeolocation(){

    navigator.permissions.query({name:'geolocation'}).then((result) => {
      this.statusPermision.next(result.state)
      result.onchange = () => {
        this.statusPermision.next(result.state)
      }
    })


  }
}
