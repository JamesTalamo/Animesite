import { Box, Center, Button, VStack, Container, Text, HStack, Spacer, Flex } from "@chakra-ui/react";

import videojs from "video.js";
import "video.js/dist/video-js.css";  // Import video.js CSS

import { useAnimeStore } from "../product/AnimeStore";

import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import WatchPageComp1 from "../components/WatchPage/WatchPageComp1";

const WatchPage = () => {
    const { animeId, episode, episodeId } = useParams();

    let { sub, dub, epId, fetchWatchPageData, fetchWatchPageDataVideo, videoUrl, tracks, selectedAnime } = useAnimeStore()

    console.log(episode)
    console.log(animeId)
    console.log(episodeId)

    let [search, setSearch] = useSearchParams();
    const ep = search.get('ep'); // Query parameter


    useEffect(() => {
        // fetchWatchPageData()
        fetchWatchPageData(ep, 'hd-1', 'sub')
    }, [])

    return (

        <Box maxW={{ lg: 'container.xl', sm: '100%' }} pt='70px' h='auto'>

            <Box w='100%' bg='pink' h='500px'>
                {/* <video style={{width:'100%',height:'100%', backgroundColor:'green'}}>

                </video> */}
            </Box>

            <Box w='100%' h='1500px' pt='25px' bg='green'>
                {ep}
                {/* Title at prev next button */}
                <WatchPageComp1 episode={episode} />
            </Box>


        </Box>
    );
};

export default WatchPage;


