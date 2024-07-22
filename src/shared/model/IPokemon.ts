export interface IPokemon {
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: { name: string };
  }[];
  moves: {
    move: { name: string };
  }[];
  types: {
    type: { name: string };
  }[];
}
