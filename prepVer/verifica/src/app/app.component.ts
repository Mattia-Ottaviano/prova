import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marker } from './models/marker.module';
import { Prova } from './models/prova.model';

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
  markerOptions!: google.maps.MarkerOptions;
  center: any;
  url = "https://5000-mattiaottaviano-prova-jb11z90n9ry.ws-eu98.gitpod.io/"
  accendi: boolean = false

  constructor(public http: HttpClient) {
    this.center = { lat: 40.81132524491864, lng: -74.07094830575488 };

    let iconData: google.maps.Icon = {
      url: './assets/img/hatch.png',
      scaledSize: new google.maps.Size(60, 60)
    }
    this.markerOptions = { icon: iconData }

  }

  ngOnInit(): void {
    this.markers = [];

    this.http.get<Prova[]>(this.url + "all").subscribe(data => {
      console.log(data)
      for (let d of data) {
        let lng = d["lng"]
        let lat = d["lat"]
        let marker: Marker = new Marker(lat, lng);
        this.markers.push(marker)
      }
    })
  }

  //on off marker
  mostra() {
    this.accendi = !this.accendi
  }

  mostraDona() {
    this.markers = [];
    this.http.get<Prova>(this.url + "donatello").subscribe(data => {
      let lng = data["lng"]
      let lat = data["lat"]
      let marker: Marker = new Marker(lat, lng);
      this.markers.push(marker)

      let iconData: google.maps.Icon = {
        url: './assets/img/Yellowicon-Tmnt-Donatelo.ico',
        scaledSize: new google.maps.Size(60, 60)
      }
      this.markerOptions = { icon: iconData }
    })
  }

  mostraLeo() {
    this.markers = [];
    this.http.get<Prova>(this.url + "leonardo").subscribe(data => {
      let lng = data["lng"]
      let lat = data["lat"]
      let marker: Marker = new Marker(lat, lng);
      this.markers.push(marker)

      let iconData: google.maps.Icon = {
        url: './assets/img/Yellowicon-Tmnt-Leonardo.ico',
        scaledSize: new google.maps.Size(60, 60)
      }
      this.markerOptions = { icon: iconData }
    })
  }

  mostraRaffa() {
    this.markers = [];
    this.http.get<Prova>(this.url + "raffaello").subscribe(data => {
      let lng = data["lng"]
      let lat = data["lat"]
      let marker: Marker = new Marker(lat, lng);
      this.markers.push(marker)

      let iconData: google.maps.Icon = {
        url: './assets/img/Yellowicon-Tmnt-Rafael.ico',
        scaledSize: new google.maps.Size(60, 60)
      }
      this.markerOptions = { icon: iconData }
    })
  }

  mostraMichi() {
    this.markers = [];
    this.http.get<Prova>(this.url + "michelangelo").subscribe(data => {
      let lng = data["lng"]
      let lat = data["lat"]
      let marker: Marker = new Marker(lat, lng);
      this.markers.push(marker)

      let iconData: google.maps.Icon = {
        url: './assets/img/Yellowicon-Tmnt-Michelangelo.ico',
        scaledSize: new google.maps.Size(60, 60)
      }
      this.markerOptions = { icon: iconData }
    })
  }


}
