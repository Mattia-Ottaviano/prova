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
  results: any;
  query!: string;

  constructor(public formula1 : Formula1Service) {}

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }

    this.query = query.value;
    this.obsDrivers = this.formula1.searchDrivers(this.query);
    this.obsDrivers.subscribe((data)=> this.results = data);
  
  }
}
