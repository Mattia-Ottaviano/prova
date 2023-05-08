import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Formula1Service } from '../formula1.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  obsDrivers! : Observable<Object>;
  constructor(public formula1 : Formula1Service) {
    this.obsDrivers = formula1.searchDrivers();
    this.obsDrivers.subscribe((data)=>console.log(data));
  }
}
