import { Box } from "@chakra-ui/react";
import { useAnimeStore } from "../product/AnimeStore";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";

import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import video.js CSS

import WatchPageComp1 from "../components/WatchPage/WatchPageComp1";
import EpisodeContainer from "../components/SharedComponents/EpisodeContainer";
import DetailsContainer from "../components/SharedComponents/DetailsContainer";
import GenreBox from "../components/GenrePage/GenreBox";
import ServerContainer from "../components/WatchPage/ServerContainer";

const WatchPage = () => {
    const { episode, episodeId } = useParams();
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    const { fetchWatchPageData, fetchWatchPageDataVideo, videoUrl, tracks, selectedAnime, animeEpisodes, moreInfoAnime } = useAnimeStore();
    let [search] = useSearchParams();
    const ep = search.get("ep"); // Query parameter

    const videoRequest = `${episodeId}?ep=` + ep;

    const changeServer = async (serverName, category) => {
        console.log(`Changed to ${serverName}`);
        console.log(`Category to ${category}`);
        await fetchWatchPageDataVideo(videoRequest, serverName, category);
    };

    useEffect(() => {
        fetchWatchPageData(episodeId, videoRequest);

        playerRef.current = videojs(videoRef.current, {
            controls: true,
            autoplay: true,
            preload: "auto",
            techOrder: ["html5"],
            sources: [
                {
                    src: videoUrl, // M3U8 URL
                    type: "application/x-mpegURL",
                },
            ],
        });

    }, [videoUrl]);

    return (
        <Box maxW={{ lg: "container.xl", sm: "100%" }} pt="70px" h="auto">
            <Box w="100%" h="400px" bg="pink" id="videoContainer">
                <video
                    ref={videoRef}
                    className="video-js vjs-default-skin"
                    style={{ width: "100%", height: "100%" }}
                ></video>
            </Box>

            <Box w="100%" h="auto" pb="25px">
                <WatchPageComp1 episode={episode} />
                <ServerContainer changeServer={changeServer} />
                <Box
                    w="100%"
                    h={{ lg: "250px", base: "500px" }}
                    mt="25px"
                    display="flex"
                    flexDirection={{ lg: "row", base: "column" }}
                    alignItems="center"
                    justifyContent="space-between"
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
