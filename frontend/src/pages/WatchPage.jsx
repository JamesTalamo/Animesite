import { Box, Center, Button, VStack, Container, Text, HStack, Spacer } from "@chakra-ui/react";
import videojs from "video.js";
import "video.js/dist/video-js.css";  // Import video.js CSS

import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const WatchPage = () => {
    const [epId, setEpId] = useState('');
    const [epUrl, setEpUrl] = useState('');
    const [tracks, setTracks] = useState([]);
    const [sub, setSub] = useState([]);
    const [dub, setDub] = useState([]);

    const { animeId, episode } = useParams();
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    const fetchAnimeEpisodeId = async (animeId) => {
        let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`);
        let animeEpData = await animeEp.json();

        let episodeId = animeEpData.data.episodes[episode - 1].episodeId;
        setEpId(episodeId);
        fetchAnimeServer(episodeId);
        fetchAnimeEpisodeWatch(episodeId, 'hd-1', 'sub');
    };

    const fetchAnimeServer = async (episodeId) => {
        const animeServer = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`);
        const animeServerData = await animeServer.json();
        setSub(animeServerData.data.sub);
        setDub(animeServerData.data.dub);
    };

    const fetchAnimeEpisodeWatch = async (episodeId, epServer, category) => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=${epServer}&category=${category}`);
        const videoUrl = await res.json();

        setEpUrl(videoUrl.data.sources[0].url);
        console.log(videoUrl.data);

        setTracks(videoUrl.data.tracks || []);
    };

    useEffect(() => {
        if (animeId) {
            fetchAnimeEpisodeId(animeId);
        }
    }, [animeId, episode]);

    useEffect(() => {
        if (epUrl && videoRef.current) {

            // Initialize the video player
            playerRef.current = videojs(videoRef.current, {
                autoplay: true,
                controls: true,
                preload: 'auto',
                sources: [{
                    src: epUrl,
                    type: 'application/x-mpegURL',
                }],
            });

            // Add remote text tracks and set English as default
            tracks.forEach((track) => {
                playerRef.current.addRemoteTextTrack(
                    {
                        kind: track.kind,
                        src: track.file,
                        label: track.label,
                        default: track.label === 'English', // Set as default if label is "English"
                    },
                    false
                );
            });

            // Ensure only the default track is visible
            const textTracks = playerRef.current.textTracks();
            for (let i = 0; i < textTracks.length; i++) {
                const textTrack = textTracks[i];
                textTrack.mode = textTrack.label === 'English' ? 'showing' : 'disabled';
            }
        }
    }, [epUrl, tracks]);

    return (
        <Box minH="100vh" pt="200px" pb="100px" bg='gray.800'>
            <Center>
                <VStack w="100%">
                    <Box w={{ base: "100%", md: "70%", lg: "50%" }} h='450px'>
                        <video
                            ref={videoRef}
                            className="video-js vjs-default-skin"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Box>

                    <Box w={{ base: "100%", md: "70%", lg: "50%" }} p="4">
                        <Container w="full" maxW="container.md" bg="gray.900" color="white" borderRadius="md" textAlign="center" p="4">
                            <Text pb="4" fontSize="lg" fontWeight="bold">
                                {`You are Watching Episode ${episode}`}
                            </Text>
                            <Text pb="4" fontSize="lg" fontWeight="bold">
                                Server: If the video isn't loading, try switching servers.
                            </Text>

                            <VStack spacing="4" w="full">
                                <Box w="full" bg="gray.700" p="2" borderRadius="md">
                                    <HStack w="full">
                                        <Box fontWeight="bold" color="white" bg="gray.800" p="8px" borderRadius="md">
                                            SUB
                                        </Box>
                                        <Spacer />
                                        <HStack spacing="2">
                                            {sub.map((server) => (
                                                <Button key={server.serverName} colorScheme="purple" onClick={() => fetchAnimeEpisodeWatch(epId, server.serverName, 'sub')}>
                                                    {server.serverName}
                                                </Button>
                                            ))}
                                        </HStack>
                                    </HStack>
                                </Box>

                                <Box w="full" bg="gray.700" p="2" borderRadius="md">
                                    <HStack w="full">
                                        <Box fontWeight="bold" color="white" bg="gray.800" p="8px" borderRadius="md">
                                            DUB
                                        </Box>
                                        <Spacer />
                                        <HStack spacing="2">
                                            {dub.map((server) => (
                                                <Button key={server.serverName} colorScheme="purple" onClick={() => fetchAnimeEpisodeWatch(epId, server.serverName, 'dub')}>
                                                    {server.serverName}
                                                </Button>
                                            ))}
                                        </HStack>
                                    </HStack>
                                </Box>
                            </VStack>
                        </Container>
                    </Box>
                </VStack>
            </Center>
        </Box>
    );
};

export default WatchPage;
