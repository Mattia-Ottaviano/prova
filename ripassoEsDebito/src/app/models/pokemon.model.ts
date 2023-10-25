export interface pokemonList {
    count: number
    next: any
    previous: any
    results: Type[]
  }

  //PokemonList NON è un vettore, ma ne contiene uno (results), quindi nel component.ts non va trattato coome tale
  
  export interface Type {
    name: string
    url: string
  }


