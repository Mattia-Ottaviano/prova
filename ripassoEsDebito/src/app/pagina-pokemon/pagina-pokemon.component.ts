import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CaratteristichePokemon } from '../models/PokemonSpec.model';


@Component({
  selector: 'app-pagina-pokemon',
  templateUrl: './pagina-pokemon.component.html',
  styleUrls: ['./pagina-pokemon.component.css']
})
export class PaginaPokemonComponent {

  routeObs!: Observable<ParamMap>;

  pokemon: any; 
  pokemonObs!: Observable<CaratteristichePokemon>;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) { }
  
  ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let pokemon = params.get('path'); //Ottengo l'id dalla ParamMap
    console.log(pokemon); //Stampo su console
    if (pokemon != null) {
      this.pokemonObs = this.http.get<CaratteristichePokemon>(`https://pokeapi.co/api/v2/type/${pokemon}`)
      this.pokemonObs.subscribe(this.dosomething)
    }
  }

  dosomething=(data: any)=>{
    this.data = data;
    console.log(this.data)
  }

  getLastPart(data: string){
    let url = data.split("/").slice(-2)
    console.log(url[0])
    return url[0]
  }


}