import { Box } from "@chakra-ui/react";

import videojs from "video.js";
import "video.js/dist/video-js.css";  // Import video.js CSS

import { useAnimeStore } from "../product/AnimeStore";

import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import WatchPageComp1 from "../components/WatchPage/WatchPageComp1";
import EpisodeContainer from "../components/SharedComponents/EpisodeContainer";
import DetailsContainer from "../components/SharedComponents/DetailsContainer";
import GenreBox from "../components/GenrePage/GenreBox";
import ServerContainer from "../components/WatchPage/ServerContainer";

import LoadingPage from '../components/LoadingPage'

const WatchPage = () => {
    const { episode, episodeId } = useParams();

    let { fetchWatchPageData, fetchWatchPageDataVideo, videoUrl, tracks, selectedAnime, animeEpisodes, moreInfoAnime, loading } = useAnimeStore()

    let [search, setSearch] = useSearchParams();
    const ep = search.get('ep'); // Query parameter

    let videoRequest = `${episodeId}?ep=` + ep

    useEffect(() => {
        fetchWatchPageData(episodeId, videoRequest)
        fetchWatchPageDataVideo(videoRequest, 'hd-1', 'sub')
    }, [])


    if (loading) {

        return <LoadingPage />
    }

    return (

        <Box maxW={{ lg: 'container.xl', sm: '100%' }} pt='70px' h='auto'>
            <Box w='100%' bg='pink' h='400px'>
                {/* <video style={{width:'100%',height:'100%', backgroundColor:'green'}}>

                </video> */}
            </Box>

            <Box w='100%' h='auto' pb='25px'>
                {/* Title at prev next button */}
                <WatchPageComp1 episode={episode} />

                {/* Select server button */}
                <ServerContainer />

                {/* Details at episodes */}
                <Box w='100%'
                    h={{ lg: '250px', base: '500px' }}
                    mt='25px'
                    display='flex'
                    flexDirection={{ lg: 'row', base: 'column' }}
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <DetailsContainer selectedAnime={selectedAnime} moreInfoAnime={moreInfoAnime} />

                    <EpisodeContainer animeEpisodes={animeEpisodes} />

                </Box>

            </Box>

            <GenreBox />


        </Box>
    );
};

export default WatchPage;


