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
    
    this.map.on('dblclick', (event) => { 
      event.preventDefault()
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
    let routToWheater = `/wheater?shearch=${municipio.mun_name}`
    let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<a href=${routToWheater} class="marker">${municipio.mun_name}</a>`
    );  
    this.marker = new mapboxgl.Marker()
    this.marker.setPopup(popup)
    this.marker.setLngLat([municipio.geo_point_2d.lon, municipio.geo_point_2d.lat])
    this.marker.addTo(this.map)
    this.map.easeTo({
      center: [municipio.geo_point_2d.lon, municipio.geo_point_2d.lat],
      zoom: 10
    })
  }


  
  


}
