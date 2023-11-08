import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pokemonList } from '../models/pokemon.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  title = 'ripassoEsDebito';
  obs!: Observable<pokemonList>
  data!: pokemonList

  constructor(public http: HttpClient) {
    this.obs = this.http.get<pokemonList>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.dosomething)
  }

  dosomething = (data: pokemonList) => {
    this.data = data;
  }

  getLastPart(arg0: string) {
    return arg0.split("/")[6]
  }

}
