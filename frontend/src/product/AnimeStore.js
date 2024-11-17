import { create } from "zustand"

export const useAnimeStore = create((set, get) => ({
    genres: [],

    // Selected anime
    selectedAnime: '',

    // Loading state to track loading status
    loading: false,




    // Fetch Calls

    //Main Page States
    latestEpisodeAnimes: [],
    topAiringAnimes: [],
    trendingAnimes: [],

    featAnime: [],
    todayAnime: [],
    weeklyAnime: [],
    monthlyAnime: [],
    fetchMainPageData: async () => {
        set({ loading: true });
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`);
            const data = await res.json();

            set({
                genres: data.data.genres,

                latestEpisodeAnimes: data.data.latestEpisodeAnimes,
                topAiringAnimes: data.data.topAiringAnimes,
                trendingAnimes: data.data.trendingAnimes,

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


    // Focus Page States
    animeEpisodes: [],
    moreInfoAnime: [],
    recoAnime: [],
    relatedAnime: [],
    fetchFocusPageData: async (animeId) => {
        set({ loading: true });
        try {
            //pag nagsamila sa focuspage yung request, tyaka palang to mag aactivate yung fetch na ito!.
            let genreData = null;
            const { genres } = get();

            if (!genres || genres.length === 0) {
                const genre = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`);
                const genreFetch = await genre.json();
                genreData = genreFetch.data.genres;
            }
            ///

            let animeInfo = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}`);
            let animeInfoData = await animeInfo.json();

            let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`);
            let animeEpData = await animeEp.json();

            set({
                genres: genreData || genres,

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

    //Watch Page States
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
    },

    //Genre Page States
    genreAnimes: [],
    genrePageTopAiring: [],
    fetchGenrePage: async (genre, page) => {
        set({ loading: true });
        try {
            let genreInfo = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/genre/${genre}?page=${page}`);
            let genreData = await genreInfo.json()
            console.log(genreData.data)
            set({
                genreAnimes: genreData.data.animes,
                genrePageTopAiring: genreData.data.topAiringAnimes,
                loading: false,
            })
        } catch (error) {
            console.error("Failed to fetch Genresx:", error);
            set({ loading: false });
        }

    }

}))

