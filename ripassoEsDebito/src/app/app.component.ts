import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pokemonList } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ripassoEsDebito';
  obs! : Observable <pokemonList>
  data! : pokemonList

  constructor(public http: HttpClient) {
    this.obs = this.http.get<pokemonList>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.dosomething)
  }
  
  dosomething = (data : pokemonList) => {
    this.data = data;
  }
}
