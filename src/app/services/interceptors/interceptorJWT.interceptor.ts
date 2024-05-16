import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>> {

    let clonedRequest = req;
    let token = sessionStorage.getItem('token');
    if(clonedRequest.url.includes(enviroment.TOKEN_API_URL)){
      if (token) {
        clonedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          } 
        });
      }

    }
  
   

    return next.handle(clonedRequest);
  }
}