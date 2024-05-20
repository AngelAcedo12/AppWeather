import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { TokenService } from 'services/token.service';
import { oauthGuard } from 'guards/oauth.guard';
import { OauthService } from 'services/oauth.service';
import { DtoVerifyToken, UserLogin } from 'models/DTO/DtoVerifyToken';
import { throwError } from 'rxjs';
import { enviroment } from 'enviroments/enviroments';
import { NotificationService } from 'services/notification-service.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private tokeService: TokenService, private oauthService : OauthService
    , private notificacionService: NotificationService, private router : Router){

  }
  

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let clonedRequest = req;
    let token = sessionStorage.getItem('token');
    
    if(!clonedRequest.url.includes(enviroment.OPEN_DATA_API) ){
      return next.handle(clonedRequest);
    }
    if(clonedRequest.url.includes(enviroment.TOKEN_API_URL)){
      return next.handle(clonedRequest);
    }
    
  
    if (token!=undefined) {
      this.oauthService.saveUserSave
      if (this.oauthService.userSaveToken === undefined) {
        setTimeout(() => {
         
            this.router.navigateByUrl('/tokens');
        }, 100); 

   
        return throwError(() => new HttpErrorResponse({
          error: 'Token invalid, the interceptor has blocked the request',
          status: 401
        }));
      }


      if(this.oauthService.userSaveToken.rol==2){
          this.notificacionService.openSnackBar({
            message: 'No tienes acceso a este recurso, el interceptor ha bloqueado la solicitud',
            duration: 2000,
            closeMessage : "Cerrar"
          })
          setTimeout(() => {
            this.router.navigateByUrl('/tokens');

          }, 1000);
          return throwError(() => new HttpErrorResponse(
            {
              error: 'You do not have permissions to access this resource, the interceptor has blocked the request',
              status: 403,
            }
          ))
        }else{
          return next.handle(clonedRequest);
        }
      }else{
        return next.handle(clonedRequest);
      }
   
      
    }

  }
