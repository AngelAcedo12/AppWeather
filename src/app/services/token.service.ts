import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'enviroments/enviroments';
import { DtoTokenRespose } from 'models/DTO/DtoTokenRespose';
import { DtoVerifyToken } from 'models/DTO/DtoVerifyToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http :HttpClient)  { }

  

  getTokenUser() {
    return this.http.get<DtoTokenRespose>(`${enviroment.TOKEN_API_URL}getTokenUser`)

  }
  
  getTokenAdmin() {
    return this.http.get<DtoTokenRespose>(`${enviroment.TOKEN_API_URL}getTokenAdmin`)

  }
  verifyToken() {
    return this.http.get<DtoVerifyToken>(`${enviroment.TOKEN_API_URL}verifyToken`)
  }

}
