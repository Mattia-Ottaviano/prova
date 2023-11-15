import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css']
})
export class InfoPokemonComponent {
  routeObs!: Observable<ParamMap>;
  pokemon : any;
  pokemonDetailsObs! : Observable<Object>;
  pokemonDetailsList : any;

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) { }
  
  ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let pokemonDetails = params.get('path'); //Ottengo l'id dalla ParamMap
    console.log(this.pokemonDetailsList); //Stampo su console
    console.log(pokemonDetails)
    if (pokemonDetails != null) { //se è diverso dal null allora esegui quello sotto
      this.pokemonDetailsObs = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonDetails}`) //va a prendere il json del tipo selezionato dal url con il numero del tipo
      this.pokemonDetailsObs.subscribe(this.dosomething)
    }
  }

  dosomething=(data: any)=>{
    this.pokemonDetailsList = data;
    console.log(this.pokemonDetailsList)
  }
}
