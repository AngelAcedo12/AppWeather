import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'enviroments/enviroments';
import { DTOcomunity, ResultComunity } from 'models/DTO/DTOcomunity';
import { Coord } from 'models/DTO/DtoForecast';
import { DtoMun, ResultMun } from 'models/DTO/DtoMun';
import { DtoProvi, ResultProv } from 'models/DTO/DtoProv';
import { DtoWheaterByLocation } from 'models/DTO/DtoWheaterByLocation';

@Injectable({
  providedIn: 'root'
})
export class ComunityService {

  constructor(private http: HttpClient) {
    this.getComunity()
   }

  comunitys : ResultComunity[]  | undefined
  
  province : ResultProv[] | undefined

  municipio : ResultMun[] | undefined

  
  getComunity(){
    this.http.get<DTOcomunity>(`${enviroment.OPEN_DATA_API}/api/explore/v2.1/catalog/datasets/georef-spain-comunidad-autonoma/records?select=acom_name&limit=20`)
    .subscribe(data => this.comunitys = data.results)
  }
  getProvince(comunity: string){
    
     this.http.get<DtoProvi>(`${enviroment.OPEN_DATA_API}/api/explore/v2.1/catalog/datasets/georef-spain-provincia/records?select=prov_name&refine=acom_name%3A${comunity}`)
     .subscribe(data => this.province = data.results)
  }
  getMunicipio(prov: string){
    this.http.get<DtoMun>(`${enviroment.OPEN_DATA_API}/api/explore/v2.1/catalog/datasets/georef-spain-municipio/records?select=mun_name,geo_point_2d&refine=prov_name%3A${prov}`)
    .subscribe(data => {
      this.municipio = data.results;
      
    }
    )
  }

  getMunicipioByCords(cords: Coord){
    const url = `http://api.openweathermap.org/data/2.5/weather?lon=${cords.lon}&lat=${cords.lat}&units=metric&APPID=${enviroment.API_KEY}`;
    return this.http.get<DtoWheaterByLocation>(url);
  }
  

}
