// import { store } from "./store";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { pokemonsListStore } from "./listStore";

export const App = observer(() => {
  console.log(pokemonsListStore.list);
  return (
    <>
      <div
        className="App"
        onClick={() => {
          pokemonsListStore.currentPage += 1;
          console.log(pokemonsListStore.list);
        }}
      >
        button
      </div>
      <div>
        {pokemonsListStore.list.map(
          (pokemonInformation) => pokemonInformation.name
        )}
      </div>
    </>
  );
});
