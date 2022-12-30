/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useNavigate, useParams } from "react-router-dom";
import { getAnimeDetail } from "../services/anime.service";
import useAnimeStore from "../stores/useAnimeStore";

export default function useDetailPage() {
  const navigate = useNavigate();
  const params: any = useParams();
  const id = params.id;

  // store
  const { animeDetail }: any = useAnimeStore(
    (state) => ({
      animeDetail: state.animeDetail,
    }),
    shallow
  );

  const [scrollTop, setScrollTop] = useState(0);
  const [anime, setAnime] = useState({
    isLoading: true,
    data: {},
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      setScrollTop(window.scrollY);
    });
  }, []);

  const setDataFromStorage = () => {
    console.log("animeDetail 2", animeDetail);
    setAnime((prevState) => ({
      ...prevState,
      isLoading: false,
      data: animeDetail,
    }));
  };

  const loadDataAnime = () => {
    setAnime((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    if (animeDetail && animeDetail?.mal_id === parseInt(id)) {
      setDataFromStorage();
    } else {
      getAnimeDetail(id)
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
            data: response.data,
          }));
        })
        .catch((error) => {
          setAnime((prevState) => ({
            ...prevState,
            isLoading: false,
          }));
        });
    }
  };

  useEffect(() => {
    loadDataAnime();
  }, []);

  const onBack = () => {
    navigate(`/`);
  };

  return {
    scrollTop,
    anime,
    onBack,
  };
}
