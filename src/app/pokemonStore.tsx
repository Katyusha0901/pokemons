import { makeObservable, observable, autorun, action, runInAction } from "mobx";
import { Pokemon } from "./types";
export class PokemonStore {
  pokemonInformation = null;

  constructor(id: number) {
    makeObservable(this, {
      pokemonInformation: observable,
    });
    fetch(`https://pokeapi.co/api/v2/ability/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        runInAction(() => {
          this.pokemonInformation = data;
        });
      })
      .catch((err) => console.log("Ошибка", err));
  }
}
