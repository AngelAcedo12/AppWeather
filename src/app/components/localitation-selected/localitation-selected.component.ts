import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResultMun } from 'models/DTO/DtoMun';
import { ComunityService } from 'services/comunity.service';

@Component({
  selector: 'app-localitation-selected',
  templateUrl: './localitation-selected.component.html',
  styleUrl: './localitation-selected.component.css'
})
export class LocalitationSelectedComponent {


  
  public comunitiesService = inject(ComunityService)
  
  
  @Output() selectedCity = new EventEmitter<ResultMun>()

  ngOnInit(): void {
    setTimeout(() => {
      this.comunitiesService.getComunity()
    },500)
  }

  form = new FormGroup({
    comunity: new FormControl(''),
    prov: new FormControl(''),
    municipio : new FormControl('')
  })


  getProv(){
    console.log(this.form.value.comunity)
    this.comunitiesService.getProvince(this.form.value.comunity || "")
  }
  getMunicipios(){

    this.comunitiesService.getMunicipio(this.form.value.prov || "")

  }

  getMunicipio(){
    let municipio = this.comunitiesService.municipio?.find(mun => {
      return mun.mun_name === this.form.value.municipio
    })
    
    this.selectedCity.emit(municipio)
  }

  comunitySelected : string | undefined
  provSelected:  string | undefined


}
