import { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useNavigate } from "react-router-dom";
import useDebounce from "../helpers/useDebounce";
import { getAnime } from "../services/anime.service";
import useAnimeStore from "../stores/useAnimeStore";

export default function useHomePage() {
  const navigate = useNavigate();

  // store
  const { setAnimeDetail } = useAnimeStore(
    (state) => ({
      setAnimeDetail: state.setAnimeDetail,
    }),
    shallow
  );

  const [scrollTop, setScrollTop] = useState(0);
  const [anime, setAnime] = useState({
    isLoading: true,
    items: [],
    parameters: {
      limit: 10,
      page: 1,
      q: "",
    },
    totalResults: 0,
  });

  window.addEventListener("scroll", () => {
    setScrollTop(window.scrollY);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loadDataAnime = () => {
    setAnime((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    getAnime(anime.parameters)
      .then((response: any) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }

        return response.json();
      })
      .then((response) => {
        setAnime((prevState) => ({
          ...prevState,
          isLoading: false,
          items:
            anime.parameters.q && anime.parameters.page === 1
              ? response.data
              : anime.items.concat(response.data),
          totalResults: response.pagination.items.total,
        }));
      })
      .catch((error) => {
        setAnime((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      });
  };

  useEffect(() => {
    loadDataAnime();
  }, [anime.parameters.page, anime.parameters.q]);

  const loadMore = () => {
    setAnime((prevState) => ({
      ...prevState,
      parameters: {
        ...prevState.parameters,
        page: prevState.parameters.page + 1,
      },
    }));
  };

  const onSearch = useDebounce(async (event: any) => {
    event?.preventDefault();
    const newKeyword = event.target.value;
    setAnime((prevState) => ({
      ...prevState,
      parameters: { ...prevState.parameters, q: newKeyword, page: 1 },
    }));
  }, 300);

  const onDirectToDetail = (animeData: any) => {
    setAnimeDetail(animeData);
    navigate(`/anime/${animeData.mal_id}`);
  };

  return {
    scrollTop,
    anime,
    loadMore,
    onSearch,
    onDirectToDetail,
  };
}
