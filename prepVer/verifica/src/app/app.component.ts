import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prova } from './models/prova.model';
import { Marker } from './models/marker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'verifica';
  // google maps zoom level
  zoom: number = 8;
  fillColor: string = "#FF0000";  //Colore delle zone catastali
  markers!: Marker[];  //Vettore con tutti i marker
  url!: "https://5000-mattiaottaviano-prova-3dcbb0pur2k.ws-eu98.gitpod.io/all"
  center: any
  
  constructor(public http: HttpClient) {
    this.center={lat: 40.70840010689748, lng: -74.04284125121363};
  }


  ngOnInit(): void {
    this.markers = [];

    this.http.get<Prova[]>("https://5000-mattiaottaviano-prova-3dcbb0pur2k.ws-eu98.gitpod.io/all").subscribe(data =>{
     for (let d of data) {
      let lat = d["lat"]
      let lng = d["lng"]
      let marker: Marker = new Marker(lat, lng);
      this.markers.push(marker)
     }
    })
  }
  
}
