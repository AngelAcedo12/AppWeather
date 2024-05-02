import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal } from '@angular/core';
import { enviroment } from 'enviroments/enviroments';
import { DtoBanderas } from 'models/DTO/DtoBanderas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanderasService {

  constructor(private http: HttpClient) { }

  
  banderas : Signal<DtoBanderas[] | undefined> = signal(undefined)
  isLoading = signal(true)
  getBanderas(){


    
    this.http.get<DtoBanderas[]>(`${enviroment.BANDERAS_API_URL}/all`).subscribe(
      data => {
        this.banderas = computed(() => data);
        this.isLoading.update(()=> false)
        console.log("COmplete")
      }
    )  
  }


}
