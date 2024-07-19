import { makeObservable, observable, autorun, action, runInAction } from "mobx";

class PokemonsListStore {
  list: { name: string; url: string }[] = [];
  count: number = 0;
  currentPage: number = 1;
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
          console.log("new");
        });
      })
      .catch((err) => console.log("Ошибка", err));
  };

  constructor() {
    makeObservable(this, {
      list: observable,
      count: observable,
      currentPage: observable,
      pageSize: observable,
      changeList: action,
    });
    fetch(`https://pokeapi.co/api/v2/ability/?limit=20&offset=20`)
      .then((response) => response.json())
      .then((data) => {
        this.list = data.results;
        this.count = data.count;
      })
      .catch((err) => console.log("Ошибка", err));
  }
}

export const pokemonsListStore = new PokemonsListStore();

autorun(() => console.log(pokemonsListStore.currentPage));
autorun(() =>
  pokemonsListStore.changeList(
    pokemonsListStore.pageSize,
    pokemonsListStore.currentPage
  )
);
