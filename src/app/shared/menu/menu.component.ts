import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MenuItems } from '../../models/MenuItems';
import { FormControl } from '@angular/forms';
import { LocationService } from '../../services/location.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public locationService = inject(LocationService)

 @Output() shearchNewLocation = new EventEmitter<string>()


  search = new FormControl('')


  onSubmit(){
    if(this.search.value!.length<1){
      return ;
    }
    let search = this.search.value;

    if(search!.length<1){
      this.shearchNewLocation.emit("Madrid, ES")
    }
    
    this.shearchNewLocation.emit(search || "Madrid, ES")
  

  }

  getSearch(){
    let search = this.search.value;
    if(search!=null){

      this.locationService.getLocation(search)
    }
  }
  setComa(){
    this.search.setValue(this.search.value+",")
  }

}
