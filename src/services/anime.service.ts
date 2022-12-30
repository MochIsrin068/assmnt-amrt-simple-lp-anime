import { API_BASE_URL } from "../constants";

export const getAnime = (parameters = {}) => {
  const params = new URLSearchParams({ ...parameters });
  return fetch(`${API_BASE_URL}/anime?${params}`);
};

export const getAnimeDetail = (id: string) => {
  return fetch(`${API_BASE_URL}/anime/${id}`);
};
