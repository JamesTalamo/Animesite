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
    detailsGenres: [],
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
                detailsGenres: animeInfoData.data.anime.moreInfo.genres,
                selectedAnime: animeInfoData.data.anime.info,
                animeEpisodes: animeEpData.data.episodes,
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

    },


    //Watch Page States
    sub: [], // nakatago sub dito
    dub: [], // nakatago dub dito
    fetchWatchPageData: async (animeId, episodeId) => {
        set({ loading: true })
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

            let animeInfo = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}`);
            let animeInfoData = await animeInfo.json();

            let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`);
            let animeEpData = await animeEp.json();
            let animeEpisodes = animeEpData.data.episodes

            const animeServer = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`);
            const animeServerData = await animeServer.json();


            set({

                genres: genreData || genres,

                recoAnime: animeInfoData.data.recommendedAnimes,
                relatedAnime: animeInfoData.data.relatedAnimes,

                selectedAnime: animeInfoData.data.anime.info,
                moreInfoAnime: animeInfoData.data.anime.moreInfo,
                detailsGenres: animeInfoData.data.anime.moreInfo.genres,
                animeEpisodes: animeEpisodes,
                sub: animeServerData.data.sub,
                dub: animeServerData.data.dub,

                loading: false
            });



        } catch (error) {
            console.error("Failed to fetch focus page data:", error);
            set({ loading: false })
        }
    },

    fetchWatchPageDataVideo: async (epId, serverName, category) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${epId}&server=${serverName}&category=${category}`);
            const videoUrlData = await res.json();

            console.log(videoUrlData)
            return {
                tracks: videoUrlData.data.tracks,
                videoUrl: videoUrlData.data.sources[0].url,
            };


        } catch (error) {
            console.error("Failed to fetch focus page data:", error);
        }
    },

    searchAnime: async (name) => {
        set({ loading: true })
        try {
            const search = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/search?q=${name}&page=1`);
            const searchData = await search.json();

            let genreData = null;
            const { genres } = get();

            if (!genres || genres.length === 0) {
                const genre = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`);
                const genreFetch = await genre.json();
                genreData = genreFetch.data.genres;
            }
            //
            set({ loading: true })
            set({

                genres: genreData || genres,
                loading: false,
            })

            console.log(searchData.data)
            return ({
                animes: searchData.data.animes
            })
        } catch (error) {
            console.error("Failed to fetch focus page data:", error);
            set({ loading: false })
        }
    }


}))

