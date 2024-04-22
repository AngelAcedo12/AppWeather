import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItems } from '../../models/MenuItems';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

 @Output() shearchNewLocation = new EventEmitter<string>()


  shearch = new FormControl('')

  onSubmit(){
    if(this.shearch.value!.length<1){
      return ;
    }
    this.shearchNewLocation.emit(this.shearch.value || "")

  }



}
