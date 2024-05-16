import { Injectable } from '@angular/core';
import { DtoUser } from 'models/DTO/DtoUser';
import { NotificationService } from './notification-service.service';
import { UserLogin } from 'models/DTO/DtoVerifyToken';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private notificationService: NotificationService, private tokenService : TokenService) {
    this.loadUser()
    
  }
  userSaveToken : UserLogin| undefined
  userInLocalStorage : DtoUser[] = []
  userSave : DtoUser = this.getUserInStorage()

  logIn(user:DtoUser){
      let userFind = this.findUser(user.name)
      if(userFind && userFind.password == user.password){
        this.notificationService.openSnackBar({
          message: 'Bienvenido',
          duration: 2000
        })
        sessionStorage.setItem('user', JSON.stringify(userFind))
        setTimeout(() => {
          window.location.href = '/'
        }, 2000);

    }else{
      this.notificationService.openSnackBar({
        message: 'El usuario no existe o la contraseña es incorrecta',
        duration: 2000
      })
    }
}
  singUp(user :DtoUser){
    if(this.isNoExistUser(user)){
      this.userInLocalStorage.push(user)
    
      localStorage.setItem('users', JSON.stringify(this.userInLocalStorage))
      sessionStorage.setItem('user', JSON.stringify(user))
      setTimeout(() => {
        window.location.href = '/'
      }, 2000);
    }else{
      this.notificationService.openSnackBar({
        message: 'El usuario ya existe',
        duration: 2000
      })
    }
  }

  isNoExistUser(user : DtoUser){
    return this.userInLocalStorage.find( u => u.name == user.name) ? false : true
  
  }
  saveUserSave(){
    this.tokenService.verifyToken().subscribe(
      (res) => {
        this.userSaveToken = res.result.userLogin
        console.log(this.userSaveToken)
      }
    )
 
  }
  verifyUser(): boolean{
    return this.userSave ? true : false
  }

  loadUser(){
    let users = localStorage.getItem('users')
    this.userInLocalStorage=users ? JSON.parse(users) : []
    
  }

  getUserInStorage(){
    let user = sessionStorage.getItem('user')
    if(user){
      return JSON.parse(user)
    }
  }
  findUser(name :string){
    return this.userInLocalStorage.find( u => u.name == name) 
  }
  closeSesion(){
    sessionStorage.removeItem('user')
    setTimeout(() => {
      window.location.href = '/'
    }, 2000);
  }
}
