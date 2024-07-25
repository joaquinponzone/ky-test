"server only";

import { PokemonResponse } from "@/types/index";
import { PokemonDetails } from "@/types/pokemon-details";
import ky from "ky";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (): Promise<PokemonResponse> => {
    return await ky.get(API_URL).json();;
}

export const getPokemon = async (pokemon: string): Promise<PokemonDetails> => {
    return await ky.get(`${API_URL}/${pokemon}`).json();
}