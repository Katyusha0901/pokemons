import { makeObservable, observable, autorun, action, runInAction } from "mobx";
import { Pokemon } from "./types";
import { PokemonStore } from "./pokemonStore";
class PokemonsListStore {
  list: { name: string; url: string }[] = [];
  count: number = 0;
  currentPage: number = 0;
  pageSize: number = 20;

  fetchForChangeList = () => {};

  changeList = (size: number, page: number) => {
    fetch(
      `https://pokeapi.co/api/v2/ability/?limit=${size}&offset=${size * page}`
    )
      .then((response) => response.json())
      .then((data) => {
        runInAction(() => {
          this.list = data.results;
          this.count = data.count;
        });
      })
      .catch((err) => console.log("Ошибка", err));
  };

  pokemons: { id: number; store: Pokemon | null }[] = [];

  takePokemonInformation = (id: number) => {
    if (!this.pokemons.find((object) => object.id === id)) {
      const pokemon = new PokemonStore(id);
      this.pokemons.push({ id: id, store: pokemon.pokemonInformation });
    } else {
      console.log("yes");
      return this.pokemons.find((object) => object.id === id);
    }
  };

  constructor() {
    makeObservable(this, {
      list: observable,
      count: observable,
      currentPage: observable,
      pageSize: observable,
      changeList: action,
      takePokemonInformation: action,
    });
    fetch(`https://pokeapi.co/api/v2/ability/?limit=20&offset=0`)
      .then((response) => response.json())
      .then((data) => {
        this.list = data.results;
        this.count = data.count;
      })
      .catch((err) => console.log("Ошибка", err));
  }
}

export const pokemonsListStore = new PokemonsListStore();

autorun(() =>
  pokemonsListStore.changeList(
    pokemonsListStore.pageSize,
    pokemonsListStore.currentPage
  )
);
