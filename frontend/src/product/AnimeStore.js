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
    // animeEpisodes: "",
    videoUrl: "",
    tracks: [],
    fetchWatchPageData: async (episodeId) => {
        try {
            let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${episodeId}/episodes`);
            let animeEpData = await animeEp.json();
            let animeEpisodes = animeEpData.data.episodes

            const animeServer = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`);
            const animeServerData = await animeServer.json();



            set({
                animeEpisodes: animeEpisodes,
                sub: animeServerData.data.sub,
                dub: animeServerData.data.dub,
            });

            console.log(epId)
            console.log(sub)
            console.log(dub)

        } catch (error) {
            console.error("Failed to fetch focus page data:", error);

        }
    },

    fetchWatchPageDataVideo: async (epId, serverName, category) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${epId}&server=${serverName}&category=${category}`);
            const videoUrlData = await res.json();



            set({
                videoUrl: videoUrlData.data.sources[0].url,
                tracks: videoUrl.data.tracks,
                loading: false,
            });

            console.log(videoUrl)
            console.log(tracks)

        } catch (error) {
            console.error("Failed to fetch focus page data:", error);
        }
    },

    //Genre Page States
    genreAnimes: [],
    genrePageTopAiring: [],
    fetchGenrePage: async (genre, page) => {
        set({ loading: true });
        try {
            //pag nagsamila sa genrepage yung request, tyaka palang to mag aactivate yung fetch na ito!.
            let genreData = null;
            const { genres } = get();

            if (!genres || genres.length === 0) {
                const genre = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`);
                const genreFetch = await genre.json();
                genreData = genreFetch.data.genres;
            }
            //

            let genreVideos = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/genre/${genre}?page=${page}`);
            let genreVideosData = await genreVideos.json()
            console.log(genreVideosData.data)
            set({

                genres: genreData || genres,

                genreAnimes: genreVideosData.data.animes,
                genrePageTopAiring: genreVideosData.data.topAiringAnimes,
                loading: false,
            })
        } catch (error) {
            console.error("Failed to fetch Genresx:", error);
            set({ loading: false });
        }

    }

}))

