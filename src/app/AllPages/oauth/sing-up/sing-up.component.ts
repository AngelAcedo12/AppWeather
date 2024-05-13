import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DtoUser } from 'models/DTO/DtoUser';
import { OauthService } from 'services/oauth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {

  constructor(private oautService: OauthService) { }


  isValid(formName : string){
   
    return this.form.get(formName)?.invalid && this.form.get(formName)?.touched

  }

  getErrorMessage(formName : string){ 
    console.log(this.form.valid)
    console.log( this.form.get(formName)?.valid== false ? 'El campo es requerido' : this.form.get(formName)?.valid==false
    ? 'El campo no cumple con la longitud minima' : '')
    return this.form.get(formName)?.valid== false ? 'El campo es requerido' : this.form.get(formName)?.valid==false
     ? 'El campo no cumple con la longitud minima' : ''
  }


  form= new FormGroup({
      
    name : new FormControl('', [Validators.required, Validators.minLength(3)]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    
  })

  singUp(){
    if(this.form.invalid){
      return
    }
    let user : DtoUser = {
      name: this.form.value.name? this.form.value.name : '',
      password: this.form.value.password ? this.form.value.password : ''
    }
    
    this.oautService.singUp(user)
  }

}
