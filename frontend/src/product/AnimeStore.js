import { create } from "zustand"

export const useAnimeStore = create((set) => ({
    page: 0,
    featAnime: [],
    todayAnime: [],
    weeklyAnime: [],
    monthlyAnime: [],

    // Selected anime
    selectedAnime: "",

    //Focus Page States
    animeEpisodes: [],

    //State for WatchPage


    //Fetch Calls

    fetchMainPageData: async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/home`)
            const data = await res.json()
            // console.log('Checker if fetch is getting called more than once. CHECK') 
            set({
                featAnime: data.data.spotlightAnimes,
                todayAnime: data.data.top10Animes.today,
                weeklyAnime: data.data.top10Animes.week,
                monthlyAnime: data.data.top10Animes.month
            })
        } catch (error) {
            console.error("Failed to fetch featured anime:", error)
        }
    },

    fetchFocusPageData: async (animeId) => {
        try {
            let animeInfo = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}`)
            let animeInfoData = await animeInfo.json()

            let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`)
            let animeEpData = await animeEp.json()

            // console.log('Checker if fetch is getting called more than once. CHECK') 

            set({
                selectedAnime: animeInfoData.data.anime.info,
                animeEpisodes: animeEpData.data.episodes
            })
        } catch (error) {
            console.error("Failed to fetch focus page data:", error)
        }

    },

    //Watch Page States!

    sub: [], // nakatago sub dito
    dub: [], // nakatago dub dito
    epId: "",
    videoUrl: "",
    tracks: [],
    fetchWatchPageData: async (animeId, episode) => {

        // console.log(animeId, episode, 'AnimeId, episode')
        try {

            let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`);
            let animeEpData = await animeEp.json();
            let episodeId = animeEpData.data.episodes[episode - 1].episodeId; // ( EPISODE ID )Yung value nito, pupunta sa pangalawang fetch req natin below.

            //Sa anime server, need yung (episode ID), para malaman mo yung mga available server (hd-1, hd-2, sub, dub)
            const animeServer = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`);
            const animeServerData = await animeServer.json();

            // console.log(animeServerData.data.sub, 'sub server')
            // console.log(animeServerData.data.dub, 'dub server')

            set({
                epId: episodeId,
                sub: animeServerData.data.sub,
                dub: animeServerData.data.dub
            })

        } catch (error) {
            console.error("Failed to fetch focus page data:", error)
        }
    },
    fetchWatchPageDataVideo: async (epId, serverName, category) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${epId}&server=${serverName}&category=${category}`);
            const videoUrl = await res.json();

            set({
                videoUrl: videoUrl.data.sources[0].url,
                tracks: videoUrl.data.tracks
            })

            // console.log(videoUrl.data.sources[0].url, 'Important')
            // console.log(videoUrl.data.tracks, 'Important')
        } catch (error) {
            console.error("Failed to fetch focus page data:", error)
        }
    }


}))

