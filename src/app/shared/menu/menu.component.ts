import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MenuItems } from '../../models/MenuItems';
import { FormControl } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public locationService = inject(LocationService)
  
  public router = inject(ActivatedRoute)
  

 @Output() shearchNewLocation = new EventEmitter<string>()

  ngOnInit(): void {

    this.selectPage()
    
  }

  selectedLocation: MenuItems | undefined
  menuItems: MenuItems[] = [
    {title: "Home", url: "/home"},
    {title: "El tiempo ☁", url: "/wheater"},  
    {title: "Banderas", url: "/banderas"},
    {title: "Mapa", url: "/map"}
  ]

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

  selectPage(){
    
    
      let page = this.menuItems.find(item => {
        return item.title === this.router.snapshot.data["title"]
      })
      if(page){
        this.selectedLocation = page
      }


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
  openMenu(){
    document.getElementById("menuLater")?.classList.replace("close","open")
  }
  closeMenu(){
    document.getElementById("menuLater")?.classList.replace("open","close")
  }
}
