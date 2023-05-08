import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Formula1Service {

  constructor(private http: HttpClient) { }

  searchDrivers() {
    const url = `http://ergast.com/api/f1/drivers`;
    let obsDrivers = this.http.get(url);
    return obsDrivers;
}
}
