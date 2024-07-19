export const routes = {
  home: "/",
  pokemon: (pokemonName?: string) =>
    `/pokemon/${pokemonName ?? ":pokemonName"}`,
} as const;
