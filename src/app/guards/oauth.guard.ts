import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { verify } from 'crypto';
import { NotificationService } from 'services/notification-service.service';
import { OauthService } from 'services/oauth.service';

export const oauthGuard: CanMatchFn = (route, state) => {

   const  oauthService  = inject(OauthService)
   const notificacionService = inject(NotificationService)
   if(oauthService.verifyUser() ){
     
     
     oauthService.saveUserSave()
     
     return true;
   }else{
        location.href = 'oauth/log-in'
        return false;
   }

};


