export const routes = {
  home: "/",
  pokemon: (name?: string) =>
    `/pokemon/${name ?? ":name"}`,
} as const;
