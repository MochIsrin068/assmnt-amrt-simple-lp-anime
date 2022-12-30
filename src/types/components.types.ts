export type TPropsHeader = {
  isHeaderWithAction: boolean;
  backgroundImageUrl?: string;
  onAction?: () => void;
};

export type TPropsInputSearch = {
  onSearch: (event: any) => void;
};

export type TGenreItem = {
  mal_id: string;
  name: string;
};

export type TItemAnimeCad = {
  mal_id: number;
  title: string;
  aired: {
    string: string;
    duration: string;
  };
  genres: Array<TGenreItem>;
  images: {
    webp: {
      image_url: string;
    };
  };
};

export type TPropsItemCard = {
  item: TItemAnimeCad;
  onDirectToDetail: (item: TItemAnimeCad) => void;
};

export type TPropsLoader = {
  content?: number;
};
