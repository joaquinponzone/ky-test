export interface PokemonResponse {
    count: number
    next: string
    previous: string
    results: {
        name: string, url: string
    }[];
}

export interface Pokemon {
    id: number
    name: string
    height: number
    weight: number
    abilities: {
        ability: {
            name: string
        }
    }[]
    types: {
        type: {
            name: string
        }
    }[]
    sprites: {
        front_default: string
    }
}