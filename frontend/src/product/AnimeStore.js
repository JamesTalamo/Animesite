import { create } from "zustand"

export const useAnimeStore = create((set) => ({
    page: 0,
    featAnime: [],
    todayAnime: [],
    weeklyAnime: [],
    monthlyAnime: [],

    // Selected anime
    selectedAnime: '',

    // Focus Page States
    animeEpisodes: [],
    moreInfoAnime: [],
    recoAnime: [],
    relatedAnime: [],

    // Loading state to track loading status
    loading: false,

    // Fetch Calls

    fetchMainPageData: async () => {
        set({ loading: true });
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`);
            const data = await res.json();

            // console.log(data.data)
            set({
                featAnime: data.data.spotlightAnimes,
                todayAnime: data.data.top10Animes.today,
                weeklyAnime: data.data.top10Animes.week,
                monthlyAnime: data.data.top10Animes.month,
                loading: false,
            });
        } catch (error) {
            console.error("Failed to fetch featured anime:", error);
            set({ loading: false });
        }
    },

    fetchFocusPageData: async (animeId) => {
        set({ loading: true });
        try {
            let animeInfo = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}`);
            let animeInfoData = await animeInfo.json();

            let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`);
            let animeEpData = await animeEp.json();

            console.log(animeInfoData.data)

            set({
                recoAnime: animeInfoData.data.recommendedAnimes,
                relatedAnime: animeInfoData.data.relatedAnimes,
                moreInfoAnime: animeInfoData.data.anime.moreInfo,
                selectedAnime: animeInfoData.data.anime.info,
                animeEpisodes: animeEpData.data.episodes,
                loading: false,
            });
        } catch (error) {
            console.error("Failed to fetch focus page data:", error);
            set({ loading: false });
        }
    },

    // Watch Page States!
    //State for WatchPage
    sub: [], // nakatago sub dito
    dub: [], // nakatago dub dito
    epId: "",
    videoUrl: "",
    tracks: [],
    fetchWatchPageData: async (animeId, episode) => {
        set({ loading: true });
        try {
            let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`);
            let animeEpData = await animeEp.json();
            let episodeId = animeEpData.data.episodes[episode - 1].episodeId;

            const animeServer = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`);
            const animeServerData = await animeServer.json();

            set({
                epId: episodeId,
                sub: animeServerData.data.sub,
                dub: animeServerData.data.dub,
                loading: false,
            });
        } catch (error) {
            console.error("Failed to fetch focus page data:", error);
            set({ loading: false });
        }
    },

    fetchWatchPageDataVideo: async (epId, serverName, category) => {
        set({ loading: true });
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${epId}&server=${serverName}&category=${category}`);
            const videoUrl = await res.json();

            set({
                videoUrl: videoUrl.data.sources[0].url,
                tracks: videoUrl.data.tracks,
                loading: false,
            });
        } catch (error) {
            console.error("Failed to fetch focus page data:", error);
            set({ loading: false });
        }
    }
}))

