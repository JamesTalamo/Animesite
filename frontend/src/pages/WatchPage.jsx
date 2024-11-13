import { Box, Center, Button, VStack, Container, Text, HStack, Spacer } from "@chakra-ui/react";
import videojs from "video.js";
import "video.js/dist/video-js.css";  // Import video.js CSS

import { useAnimeStore } from "../product/AnimeStore";

import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const WatchPage = () => {
    const { animeId, episode } = useParams();

    let { sub, dub, epId, fetchWatchPageData, fetchWatchPageDataVideo, videoUrl, tracks } = useAnimeStore()

    const videoRef = useRef(null);
    const playerRef = useRef(null);


    useEffect(() => {
        fetchWatchPageData(animeId, episode)
    }, [])

    let videoUrlFetch = (epId, serverName, category) => {
        fetchWatchPageDataVideo(epId, serverName, category)
    }

    useEffect(() => {

        if (videoUrl) {
            // Initialize the video player
            playerRef.current = videojs(videoRef.current, {
                autoplay: true,
                controls: true,
                preload: 'auto',
                sources: [{
                    src: videoUrl,
                    type: 'application/x-mpegURL',
                }],
            });

            // Add remote text tracks and set English as default
            {tracks.map((track) => {
                {track.label === 'English' ? console.log(track) : 'fuck'}
            })}

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
    }, [videoUrl, tracks]);

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
                                                <Button key={server.serverName} colorScheme="purple" onClick={() => videoUrlFetch(epId, server.serverName, 'sub')}>
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
                                                <Button key={server.serverName} colorScheme="purple" onClick={() => videoUrlFetch(epId, server.serverName, 'dub')}>
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
