
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
import LoadingPage from "../components/LoadingPage";

const WatchPage = () => {
    const { episode, episodeId } = useParams();
    const videoRef = useRef(null); // Ref for the video DOM element
    const playerRef = useRef(null); // Ref for the Video.js player

    const { fetchWatchPageData, fetchWatchPageDataVideo, videoUrl, tracks, selectedAnime, animeEpisodes, moreInfoAnime, loading } = useAnimeStore();
    let [search] = useSearchParams();
    const ep = search.get("ep"); // Query parameter

    let videoRequest = `${episodeId}?ep=` + ep;

    const changeServer = (serverName, category) => {
        console.log(`Changed to ${serverName}`);
        console.log(`Category to ${category}`);
        fetchWatchPageDataVideo(videoRequest, serverName, category);
    };

    useEffect(() => {
        // Fetch video data
        fetchWatchPageData(episodeId, videoRequest);

        // Initialize the Video.js player
        playerRef.current = videojs(videoRef.current, {
            controls: true,
            autoplay: true,
            preload: "auto",
            fluid: true, // Responsive player
            techOrder: ["html5"],
            sources: [{ src: videoUrl, type: "application/x-mpegURL" }], // Use videoUrl from the store
            textTrackSettings: {
                backgroundColor: "black",
                fontSize: "18px",
                color: "white",
            },
        });

    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <Box maxW={{ lg: "container.xl", sm: "100%" }} pt="70px" h="auto">
            <Box w="100%" h="400px" id="videoContainer">
                {/* Video.js Player */}
                <video
                    ref={videoRef}
                    className="video-js vjs-default-skin"
                    style={{ width: "100%", height: "100%" }}
                ></video>
            </Box>

            <Box w="100%" h="auto" pb="25px">
                {/* Title at prev next button */}
                <WatchPageComp1 episode={episode} />

                {/* Select server button */}
                <ServerContainer changeServer={changeServer} />

                {/* Details and episodes */}
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



