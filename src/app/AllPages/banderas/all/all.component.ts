import { Component, OnInit } from '@angular/core';
import { DtoBanderas } from 'models/DTO/DtoBanderas';
import { BanderasService } from 'services/banderas.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit{


  constructor(public banderasService: BanderasService) { }

  
  ngOnInit(): void {

    this.loadAllBanderas();
    
  }

 
 async loadAllBanderas(){
   await this.banderasService.getBanderas()
  }




}
