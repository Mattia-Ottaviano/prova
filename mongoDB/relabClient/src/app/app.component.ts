import { Component, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps'
import { Observable } from 'rxjs';
import {  GeoFeatureCollection } from './models/geojson.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relabClient';

  //Variabile che conterrà i nostri oggetti GeoJson
  geoJsonObject : GeoFeatureCollection;
  //Observable per richiedere al server python i dati sul DB
  obsGeoData: Observable<GeoFeatureCollection>;

  // Centriamo la mappa
  center: google.maps.LatLngLiteral = { lat: 45.506738, lng: 9.190766 };
  zoom = 8;

  constructor(public http: HttpClient) {
    //Facciamo iniettare il modulo HttpClient dal framework Angular (ricordati di importare la libreria)
  }

  //Metodo che scarica i dati nella variabile geoJsonObject
  prepareData = (data: GeoFeatureCollection) => {
    this.geoJsonObject = data
    console.log( this.geoJsonObject );
  }

 //Una volta che la pagina web è caricata, viene lanciato il metodo ngOnInit scarico i    dati 
  //dal server
  ngOnInit() {
    this.obsGeoData = this.http.get<GeoFeatureCollection>("mongodb+srv://ottavianomattia:scrivania0921!1509@cluster0.jjjyhjc.mongodb.net/Relab/ci_vettore/50");
    this.obsGeoData.subscribe(this.prepareData);
  }
}


