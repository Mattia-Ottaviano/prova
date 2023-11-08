import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Listapokemon } from '../models/Listapokemon.model';

@Component({
  selector: 'app-pagina-pokemon',
  templateUrl: './pagina-pokemon.component.html',
  styleUrls: ['./pagina-pokemon.component.css']
})
export class PaginaPokemonComponent {

  obs!: Observable<Listapokemon>
  data!: Listapokemon

  constructor(public http: HttpClient) {
    this.obs = this.http.get<Listapokemon>("https://pokeapi.co/api/v2/pokemon")
    this.obs.subscribe(this.dosomething)
  }

  dosomething = (data: Listapokemon) => {
    this.data = data;
  }
}
