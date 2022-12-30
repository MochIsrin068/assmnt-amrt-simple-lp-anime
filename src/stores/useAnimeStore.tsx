import create from "zustand";
import { persist } from "zustand/middleware";

const useStoreAddCostSubmission = create(
  persist(
    (set: any, get: any) => ({
      animeDetail: null,

      setAnimeDetail: (animeData: any) =>
        set((state: any) => ({ animeDetail: animeData })),
      resetAnimeDetail: () => set((state: any) => ({ animeDetail: null })),
    }),
    { name: "anime-data" }
  )
);

export default useStoreAddCostSubmission;
