import { create } from "zustand"

export const useAnimeStore = create((set) => ({
    page: 0,
    featAnime: [],
    todayAnime: [],
    weeklyAnime: [],
    monthlyAnime: [],

    // Setters
    setPage: (page) => set({ page }),
    setFeatAnime: (featAnime) => set({ featAnime }),
    setTodayAnime: (todayAnime) => set({ todayAnime }),
    setWeeklyAnime: (weeklyAnime) => set({ weeklyAnime }),
    setMonthlyAnime: (monthlyAnime) => set({ monthlyAnime }),

    // Selected anime
    selectedAnime: "",
    setSelectedAnime: (selectedAnime) => set({ selectedAnime }),

    //Focus Page States
    animeEpisodes: [],
    setAnimeEpisodes: (animeEpisodes) => set({ animeEpisodes }),
}))

