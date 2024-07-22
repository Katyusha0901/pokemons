import { makeObservable, observable, autorun, action, runInAction } from "mobx";
import { PokemonStore } from "./pokemonStore";
import { pokemonApi } from "../api/pokemonApi";
import { IPokemonListItem } from "../model/IPokemonListItem";

class PokemonsListStore {
  pageSize = 20;
  currentPage = 1;
  totalCount = 0;
  isLoading = false;
  list: IPokemonListItem[] = [];

  pokemons: Record<string, PokemonStore> = {};

  constructor() {
    makeObservable(this, {
      pageSize: observable,
      currentPage: observable,
      totalCount: observable,
      isLoading: observable,
      list: observable,
      pokemons: observable,
      getList: action,
      setPaginationInfo: action,
      getPokemon: action,
    });

    autorun(() => this.getList());
  }

  getList = () => {
    this.isLoading = true;

    pokemonApi
      .list(this.currentPage, this.pageSize)
      .then((data) => {
        runInAction(() => {
          this.list = data.results.map(({ name }) => ({ name }));
          this.totalCount = data.count;
        });
      })
      .finally(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  };

  setPaginationInfo = (page: number, pageSize: number) => {
    this.currentPage = page;
    this.pageSize = pageSize;

    this.getList();
  };

  getPokemon = (name: string) => {
    if (this.pokemons[name]) {
      return this.pokemons[name];
    }

    const newPokemon = new PokemonStore(name);
    this.pokemons[name] = newPokemon;
    return newPokemon;
  };
}

export const pokemonsListStore = new PokemonsListStore();
