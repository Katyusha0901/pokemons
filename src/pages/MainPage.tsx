import { observer } from "mobx-react-lite";
import { pokemonsListStore } from "../app/pokemonsListStore";

export const MainPage = observer(() => {
  function takeId(pokemonInformation: { name: string; url: string }) {
    const idNumbers: string[] = [];
    pokemonInformation.url
      .split("")
      .slice(34)
      .forEach((element) => {
        if (parseInt(element) || element === "0") {
          idNumbers.push(element);
        }
      });
    return idNumbers.join();
  }

  return (
    <>
      <div
        className="App"
        onClick={() => {
          pokemonsListStore.currentPage += 1;
        }}
      >
        button
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        {pokemonsListStore.list.map((pokemonInformation) => (
          <div key={takeId(pokemonInformation)} style={{ padding: "10px" }}>
            {pokemonInformation.name}
          </div>
        ))}
      </div>
    </>
  );
});
