import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marker } from './models/marker.module';
import { Prova } from './models/prova.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'verifica';
  // google maps zoom level
  zoom: number = 8;
  fillColor: string = "#FF0000";  //Colore delle zone catastali
  markers!: Marker[];  //Vettore con tutti i marker
  center: any;
  url = "https://5000-mattiaottaviano-prova-j4k5nieowyt.ws-eu98.gitpod.io/all"

  constructor(public http: HttpClient) {
    this.center={lat: 40.81132524491864, lng: -74.07094830575488};
  }

  ngOnInit(): void {
    this.markers = [];

    this.http.get<Prova[]>("https://5000-mattiaottaviano-prova-j4k5nieowyt.ws-eu98.gitpod.io/all").subscribe(data =>{
     for (let d of data) {
      let lng = d["lat"]
      let lat = d["lng"]
      let marker: Marker = new Marker(lat, lng);
      this.markers.push(marker)
     }
    })

  }
  
}
