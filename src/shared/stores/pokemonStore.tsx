import { makeObservable, observable, runInAction } from "mobx";

import { IPokemon } from "../model/IPokemon";
import { pokemonApi } from "../api/pokemonApi";

export class PokemonStore {
  data: IPokemon | null = null;

  constructor(name: string) {
    makeObservable(this, {
      data: observable,
    });

    pokemonApi.pokemon(name).then((data) => {
      runInAction(() => {
        this.data = data;
      });
    });
  }
}
