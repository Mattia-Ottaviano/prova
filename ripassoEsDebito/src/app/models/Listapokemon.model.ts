
export interface Listapokemon {
    id: number,
    name: string,
    types: PokeType[]
  }

export interface PokeType{
    slot: number
    type: Categoria[]
}

export interface Categoria{
    name: string,
    url: string
}