import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal } from '@angular/core';
import { enviroment } from 'enviroments/enviroments';
import { DtoBanderas } from 'models/DTO/DtoBanderas';
import { catchError, Observable } from 'rxjs';
import { NotificationService } from './notification-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BanderasService {

  constructor(private http: HttpClient, private notificateService : NotificationService, private router : Router) { }

  
  banderas : Signal<DtoBanderas[] | undefined> = signal(undefined)
  isLoading = signal(true)
  getBanderas(){


    
    this.http.get<DtoBanderas[]>(`${enviroment.BANDERAS_API_URL}/all`).pipe(
      catchError((error) => {
        console.error(error)
        this.notificateService.openSnackBar({
          message: 'Error al cargar las banderas, redireccionando a la pagina de inicio',
          closeMessage: 'Aceptar',
          duration: 2000,
          panelClass: 'error-snackbar'
        });

        setTimeout(() => {
          this.router.navigateByUrl('/')
        }, 1000);

        return new Observable<DtoBanderas[]>()
      }
    )
    ).subscribe(
      data => {
        this.banderas = computed(() => data);
        this.isLoading.update(()=> false)
       
      }
    )  
  }


}
