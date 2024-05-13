import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { verify } from 'crypto';
import { OauthService } from 'services/oauth.service';

export const oauthGuard: CanMatchFn = (route, state) => {

   const  oauthService  = inject(OauthService)

   if(oauthService.verifyUser()){
        return true;
   }else{
        location.href = 'oauth/log-in'
        return false;
   }

};


