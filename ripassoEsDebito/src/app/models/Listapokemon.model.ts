
export interface Listapokemon {
    id: number,
    name: string,
    types: PokeType[]
  }

interface PokeType{
    slot: number
    type: Categoria[]
}

interface Categoria{
    name: string,
    url: string
}