import { Box, Center, Spinner, Button, VStack, Container, Text, HStack, Spacer } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Hls from "hls.js";

const WatchPage = ({ episodes }) => {
    const { episode } = useParams();

    const [watching, setWatching] = useState("");
    const [vidTrack, setVidTrack] = useState([]);
    const [epServer, setEpServer] = useState("");
    const [sub, setSub] = useState([]);
    const [dub, setDub] = useState([]);
    const videoRef = useRef(null);
    const hlsRef = useRef(null);

    const isFetchingRef = useRef(false); // Flag to track if data is being fetched

    const handleEpisodeServer = (episodeServer) => {
        setEpServer(episodeServer);
    };

    useEffect(() => {
        const fetchEpisode = async (episodeId) => {
            try {
                isFetchingRef.current = true; // Set flag before fetch starts

                const res = await fetch(
                    `${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=${epServer}&category=sub`
                );
                const data = await res.json();

                const res2 = await fetch(
                    `${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`
                );
                const data2 = await res2.json();

                setSub(data2.data.sub);
                setDub(data2.data.dub);

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
            fetchEpisode(episodeId);
        }
    }, [episode, episodes, epServer]);

    useEffect(() => {
        if (watching && videoRef.current) {
            if (Hls.isSupported() && watching.endsWith(".m3u8")) {
                hlsRef.current = new Hls();
                hlsRef.current.loadSource(watching);
                hlsRef.current.attachMedia(videoRef.current);
            }
        }
        return () => {
            if (hlsRef.current) {
                hlsRef.current.destroy();
            }
        };
    }, [watching]);

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
                            <video ref={videoRef} controls style={{ width: "100%", height: "100%" }} autoPlay>
                                {/* {!watching.endsWith(".m3u8") && <source src={watching} type="video/mp4" />} */}
                                <track
                                    kind={vidTrack.kind}
                                    label={vidTrack.label}
                                    src={vidTrack.file}
                                    default={vidTrack.default}

                                    width='400px'
                                />
                                {/* {console.log(vidTrack.file)}
                                {console.log(vidTrack.label)}
                                {console.log(vidTrack.kind)}
                                {console.log(vidTrack.default)}
                                {console.log(watching)} */}
                            </video>
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

