import { AfterViewInit, Component } from '@angular/core';
import { enviroment } from 'enviroments/enviroments';
import mapboxgl from 'mapbox-gl';
import { Coords } from 'models/Coords';
import { ResultMun } from 'models/DTO/DtoMun';
import { DtoWheaterByLocation } from 'models/DTO/DtoWheaterByLocation';
import { ComunityService } from 'services/comunity.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  
  constructor(private comunityService: ComunityService) { }
  
  ngOnInit(): void {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  ngAfterViewInit(): void {

    this.initMap();
  }
  marker : mapboxgl.Marker | undefined;
  map : mapboxgl.Map | undefined;



  initMap(){
   
    mapboxgl.accessToken = enviroment.MAP_BOX_TOKEN;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.9629, 20.5937],
      zoom: 5,
      maxTileCacheSize: 1000,
      preserveDrawingBuffer: true,
      renderWorldCopies: true,
      
    });
    
    this.map.on('click', (event) => { 

      let coords = {
        lat: event.lngLat.lat,
        lon: event.lngLat.lng
      }
      this.comunityService.getMunicipioByCords(coords).subscribe((mun : DtoWheaterByLocation) => {
        console.log(mun)
        this.setMarker({mun_name: mun.name, geo_point_2d: {lat: mun.coord.lat, lon: mun.coord.lon}})
        
      }
      )
        

    });
  }

  setMarker(municipio: ResultMun ){
    if(this.map == undefined){
      return;
    }
    if(this.marker!=undefined){
      this.marker.remove()
    }

    this.marker = new mapboxgl.Marker()
      .setLngLat([municipio.geo_point_2d.lon, municipio.geo_point_2d.lat])
      .addTo(this.map)
    this.map.easeTo({
      center: [municipio.geo_point_2d.lon, municipio.geo_point_2d.lat],
      zoom: 10
    })
  }


  
  


}
