import { message } from "antd";

class PokemonApi {
  list = (
    page: number,
    pageSize: number
  ): Promise<{ count: number; results: { name: string }[] }> =>
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${pageSize}&offset=${
        pageSize * (page - 1)
      }`
    )
      .then((response) => response.json())
      .catch(() => message.error("Something went wrong with the API."));

  pokemon = (name: string) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((response) => response.json())
      .catch(() => message.error("Something went wrong with the API."));
}

export const pokemonApi = new PokemonApi();
