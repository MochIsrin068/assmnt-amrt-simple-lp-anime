import { TItemAnimeCad } from "./components.types";

export type TEventSearch = {
  target: {
    value: string;
  };
};

export type TStore = {
  animeDetail: null | TItemAnimeCad;
  setAnimeDetail: (animeDetail: TItemAnimeCad) => void;
  resetAnimeDetail: () => void;
};
