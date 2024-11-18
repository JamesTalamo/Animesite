import { Box, Button, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import videojs from "video.js";
import "video.js/dist/video-js.css";  // Import video.js CSS

import { useAnimeStore } from "../product/AnimeStore";

import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import WatchPageComp1 from "../components/WatchPage/WatchPageComp1";
import EpisodeContainer from "../components/SharedComponents/EpisodeContainer";
import DetailsContainer from "../components/SharedComponents/DetailsContainer";
import GenreBox from "../components/GenrePage/GenreBox";

const WatchPage = () => {
    const { episode, episodeId } = useParams();

    let { sub, dub, epId, fetchWatchPageData, fetchWatchPageDataVideo, videoUrl, tracks, selectedAnime, animeEpisodes, moreInfoAnime } = useAnimeStore()

    let [search, setSearch] = useSearchParams();
    const ep = search.get('ep'); // Query parameter

    // console.log(episode)
    // console.log(episodeId)
    // console.log(ep)

    let videoRequest = `${episodeId}?ep=` + ep

    useEffect(() => {
        fetchWatchPageData(episodeId)
        fetchWatchPageDataVideo(videoRequest, 'hd-1', 'sub')
    }, [])

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
                <Box
                    borderRadius='xl'
                    border='1px rgba(255, 255, 255, 0.16) solid'
                    w='100%'
                    h='150px'
                    bg='gray.800'
                >

                </Box>

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


