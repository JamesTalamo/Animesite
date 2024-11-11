// import { Box, Center, Button, VStack, Container, Text, HStack, Spacer } from "@chakra-ui/react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";  // Import video.js CSS

// import { useParams } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";

// const WatchPage = () => {
//     const [epId, setEpId] = useState('');
//     const [epUrl, setEpUrl] = useState('');

//     const [tracks, setTracks] = useState([])
//     const [sub, setSub] = useState([]);
//     const [dub, setDub] = useState([]);


//     const { animeId, episode } = useParams();
//     const videoRef = useRef(null);  // Create a reference for the video element
//     const playerRef = useRef(null);  // Store video.js player instance

//     const fetchAnimeEpisodeId = async (animeId) => {
//         let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`);
//         let animeEpData = await animeEp.json();

//         let episodeId = animeEpData.data.episodes[episode - 1].episodeId;
//         console.log("Episode ID:", episodeId);

//         setEpId(episodeId);
//         fetchAnimeServer(episodeId);
//         fetchAnimeEpisodeWatch(episodeId, 'hd-1', 'sub');
//     };

//     const fetchAnimeServer = async (episodeId) => {
//         const animeServer = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`);
//         const animeServerData = await animeServer.json();

//         // console.log("Sub:", animeServerData.data.sub); // Array
//         setSub(animeServerData.data.sub);

//         // console.log("Dub:", animeServerData.data.dub); // Array
//         setDub(animeServerData.data.dub);
//     };

//     const fetchAnimeEpisodeWatch = async (episodeId, epServer, category) => {
//         const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=${epServer}&category=${category}`);
//         const videoUrl = await res.json();
//         console.log(videoUrl.data.tracks)

//         console.log(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=${epServer}&category=${category}`);

//         setEpUrl(videoUrl.data.sources[0].url);  // Set the m3u8 URL
//         console.log("Episode Watch URL:", videoUrl.data.sources[0].url);

//         setTracks(videoUrl.dataTracks)
//         console.log('Available Tracks for SUB: ', videoUrl.dataTracks)
//     };

//     useEffect(() => {
//         if (animeId) {
//             fetchAnimeEpisodeId(animeId);
//         }
//     }, [animeId, episode]); // Only run when animeId or episode changes

//     useEffect(() => {
//         if (epUrl && videoRef.current) {
//             // Wait for the video element to be in the DOM and initialize the player only if not already initialized
//             // if (playerRef.current) {
//             //     playerRef.current.dispose(); // Dispose of any previous player instance
//             // }

//             // Initialize the new video.js player with the m3u8 URL
//             playerRef.current = videojs(videoRef.current, {
//                 autoplay: true,
//                 controls: true,
//                 preload: 'auto',
//                 sources: [{
//                     src: epUrl,  // Pass the m3u8 URL
//                     type: 'application/x-mpegURL',  // HLS MIME type
//                 }],
//             });
//         }

//         // Cleanup player when component unmounts
//         // return () => {
//         //     if (playerRef.current) {
//         //         playerRef.current.dispose();
//         //     }
//         // };
//     }, [epUrl]); // Re-run when epUrl changes

//     return (
//         <Box minH="100vh" pt="200px" pb="100px">
//             <Center>
//                 <VStack w="100%">
//                     <Box w={{ base: "100%", md: "70%", lg: "50%" }} h="450px" bg="gray.900">
//                         {/* Video.js player */}
//                         <Box data-vjs-player style={{ width: "100%", height: "100%" }}>
//                             <video
//                                 style={{ width: '100%', height: '100%' }}
//                                 ref={videoRef}
//                                 className="video-js vjs-default-skin"
//                                 controls />
//                         </Box>
//                     </Box>

//                     <Box w={{ base: "100%", md: "70%", lg: "50%" }} p="4">
//                         <Container w="full" maxW="container.md" bg="gray.900" color="white" borderRadius="md" textAlign="center" p="4">
//                             <Text pb="4" fontSize="lg" fontWeight="bold">
//                                 {`You are Watching Episode ${episode}`}
//                             </Text>
//                             <Text pb="4" fontSize="lg" fontWeight="bold">
//                                 Server: If the video isn't loading, try switching servers.
//                             </Text>

//                             <VStack spacing="4" w="full">
//                                 {/* Sub servers */}
//                                 <Box w="full" bg="gray.700" p="2" borderRadius="md">
//                                     <HStack w="full">
//                                         <Box fontWeight="bold" color="white" bg="gray.800" p="8px" borderRadius="md">
//                                             SUB
//                                         </Box>
//                                         <Spacer />
//                                         <HStack spacing="2">
//                                             {sub.map((server) => (
//                                                 <Button key={server.serverName} colorScheme="purple" onClick={() => fetchAnimeEpisodeWatch(epId, server.serverName, 'sub')}>
//                                                     {server.serverName}
//                                                 </Button>
//                                             ))}
//                                         </HStack>
//                                     </HStack>
//                                 </Box>

//                                 {/* Dub servers */}
//                                 <Box w="full" bg="gray.700" p="2" borderRadius="md">
//                                     <HStack w="full">
//                                         <Box fontWeight="bold" color="white" bg="gray.800" p="8px" borderRadius="md">
//                                             DUB
//                                         </Box>
//                                         <Spacer />
//                                         <HStack spacing="2">
//                                             {dub.map((server) => (
//                                                 <Button key={server.serverName} colorScheme="purple" onClick={() => fetchAnimeEpisodeWatch(epId, server.serverName, 'dub')}>
//                                                     {server.serverName}
//                                                 </Button>
//                                             ))}
//                                         </HStack>
//                                     </HStack>
//                                 </Box>
//                             </VStack>
//                         </Container>
//                     </Box>
//                 </VStack>
//             </Center>
//         </Box>
//     );
// };

// export default WatchPage;


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
        setTracks(videoUrl.data.tracks || []);
    };

    useEffect(() => {
        if (animeId) {
            fetchAnimeEpisodeId(animeId);
        }
    }, [animeId, episode]);

    useEffect(() => {
        console.log(videoRef.current)
        if (epUrl && videoRef.current) {

            // if (playerRef.current) {
            //     playerRef.current.dispose();
            // }

            playerRef.current = videojs(videoRef.current, {
                autoplay: true,
                controls: true,
                preload: 'auto',
                sources: [{
                    src: epUrl,
                    type: 'application/x-mpegURL',
                }],
            });

            tracks.forEach((track) => {
                playerRef.current.addRemoteTextTrack(
                    {
                        kind: track.kind,
                        src: track.file,
                        label: track.label,
                        default: track.default || false,
                    },
                    false
                );
            });
        }

        // return () => {
        //     if (playerRef.current) {
        //         playerRef.current.dispose();
        //     }
        // };
    }, [epUrl, tracks]);

    return (
        <Box minH="100vh" pt="200px" pb="100px">
            <Center>
                <VStack w="100%">
                    <Box w={{ base: "100%", md: "70%", lg: "50%" }} h="450px" bg="gray.900">
                        <Box data-vjs-player style={{ width: "100%", height: "100%" }}>
                            <video
                                ref={videoRef}
                                className="video-js vjs-default-skin"
                                controls
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Box>
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
