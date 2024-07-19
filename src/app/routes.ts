export const routes = {
  home: "/",
  country: (pokemonName?: string) =>
    `/country/${pokemonName ?? ":pokemonName"}`,
} as const;
