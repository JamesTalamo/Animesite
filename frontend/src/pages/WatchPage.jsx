import { Box, Center, Spinner, Button, VStack, Container, Text, HStack, Spacer } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";  // Import video.js CSS

const WatchPage = ({ episodes }) => {
    const { episode } = useParams();

    const [watching, setWatching] = useState("");
    const [vidTrack, setVidTrack] = useState([]);
    const [epServer, setEpServer] = useState("");
    const [sub, setSub] = useState([]);
    const [dub, setDub] = useState([]);
    const videoRef = useRef(null);
    const isFetchingRef = useRef(false);

    const handleEpisodeServer = (episodeServer) => {
        setEpServer(episodeServer);
    };

    useEffect(() => {
        const fetchServer = async (episodeId) => {
            try {
                const res2 = await fetch(
                    `${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`
                );
                const data2 = await res2.json();
                setSub(data2.data.sub);
                setDub(data2.data.dub);
            } catch (error) {
                console.error("Error fetching server data:", error);
            }
        };

        const fetchEpisode = async (episodeId) => {
            try {
                isFetchingRef.current = true; // Set flag before fetch starts

                const res = await fetch(
                    `${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=${epServer}&category=sub`
                );
                const data = await res.json();

                const videoUrl = data.data.sources[0].url;
                const videoTracks = data.data.tracks;
                const englishSubtitle = videoTracks.find(track => track.label === "English");

                setVidTrack(englishSubtitle);
                setWatching(videoUrl);

                isFetchingRef.current = false; // Reset flag after fetch completes
            } catch (error) {
                console.error("Error fetching episode:", error);
                isFetchingRef.current = false;
            }
        };

        // Only fetch if data is not already being fetched
        if (episode && episodes[episode - 1] && !isFetchingRef.current) {
            const episodeId = episodes[episode - 1].episodeId;
            fetchServer(episodeId);
            fetchEpisode(episodeId);
        }
    }, [episode, episodes, epServer]);

    useEffect(() => {
        // Ensure to reset the video player when the server changes
        if (watching && videoRef.current) {
            // Initialize video.js player
            const player = videojs(videoRef.current, {
                controls: true,
                autoplay: true,
                preload: "auto",
                sources: [{
                    src: watching,
                    type: "application/x-mpegURL", // Assuming this is an HLS stream, modify if needed
                }],
                tracks: [{
                    kind: vidTrack.kind,
                    label: vidTrack.label,
                    src: vidTrack.file, // Use the subtitle file URL dynamically
                    default: vidTrack.default,
                }]
            });

            // Dispose of the previous player when the component or video changes
            return () => {
                if (player) {
                    player.dispose();
                }
            };
        }
    }, [watching, vidTrack, epServer]);  // Adding `epServer` to trigger effect when server changes



    return (
        <Box minH="100vh" pt="200px" pb="100px">
            <Center>
                <VStack w="100%">
                    <Box
                        w={{ base: "100%", md: "70%", lg: "50%" }}
                        h="450px"
                        bg="gray.900"
                        transition="opacity 0.5s ease-in-out"
                    >
                        {watching ? (
                            <Box data-vjs-player style={{ width: "100%", height: "100%" }}>
                                <video
                                    ref={videoRef}
                                    className="video-js vjs-default-skin"
                                    controls
                                ></video>
                            </Box>
                        ) : (
                            <Center h="100%">
                                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                            </Center>
                        )}
                    </Box>

                    <Box w={{ base: "100%", md: "70%", lg: "50%" }} p="4">
                        <Container
                            w="full"
                            maxW="container.md"
                            bg="gray.900"
                            color="white"
                            borderRadius="md"
                            textAlign="center"
                            p="4"
                        >
                            <Text pb="4" fontSize="lg" fontWeight="bold">
                                {`You are Watching Episode ${episode}`}
                            </Text>
                            <Text pb="4" fontSize="lg" fontWeight="bold">
                                Server : If the video isn't loading, try to switch servers.
                            </Text>

                            <VStack spacing="4" w="full">
                                <Box w="full" bg="gray.700" p="2" borderRadius="md">
                                    <HStack w="full">
                                        <Box fontWeight="bold" color="white.100" bg="gray.800" p="8px" borderRadius="md">
                                            SUB
                                        </Box>
                                        <Spacer />
                                        <HStack spacing="2">
                                            {sub.map((sub) => (
                                                <Button colorScheme="purple" onClick={() => handleEpisodeServer(sub.serverName)}>
                                                    {sub.serverName}
                                                </Button>
                                            ))}
                                        </HStack>
                                    </HStack>
                                </Box>

                                <Box w="full" bg="gray.700" p="2" borderRadius="md">
                                    <HStack w="full">
                                        <Box fontWeight="bold" color="white.100" bg="gray.800" p="8px" borderRadius="md">
                                            DUB
                                        </Box>
                                        <Spacer />
                                        <HStack spacing="2">
                                            {dub.map((dub) => (
                                                <Button colorScheme="purple" onClick={() => handleEpisodeServer(dub.serverName)}>
                                                    {dub.serverName}
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


