import { Box, Center, Spinner, Button, VStack, Container, Text, HStack, Spacer } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Hls from "hls.js" // Import Hls.js for handling HLS streams

let WatchPage = ({ episodes }) => {
    const { animeName, episode } = useParams()


    const [watching, setWatching] = useState('')
    const [vidTrack, setVidTrack] = useState([])
    const [epServer, setEpServer] = useState('')


    const videoRef = useRef(null) // Ref for the video element
    const hlsRef = useRef(null) // Ref for Hls.js instance

    let [sub, setSub] = useState([])
    let [dub, setDub] = useState([])

    let handleEpisodeServer = (episodeServer) => {
        // console.log(episodeServer)
        setEpServer(episodeServer)
    }

    useEffect(() => {
        console.log(epServer)
        const episodeId = episodes[episode - 1].episodeId
        fetchEpisode(episodeId)
    }, [epServer])

    useEffect(() => {
        if (episode && episodes[episode - 1]) {
            const episodeId = episodes[episode - 1].episodeId
            // console.log(episodeId)
            fetchEpisode(episodeId)
        }
    }, [episode, episodes])

    const fetchEpisode = async (episodeId) => {
        try {
            const res = await fetch(`http://localhost:4000/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=${epServer}&category=sub`)
            const data = await res.json()

            const res2 = await fetch(`http://localhost:4000/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`) // para to sa fetching ng episode server available
            const data2 = await res2.json()


            setSub(data2.data.sub)
            setDub(data2.data.dub)

            // console.log(data)

            const videoUrl = data.data.sources[0].url
            const videoTracks = data.data.tracks

            console.log("Get the Sub titles here", videoTracks)
            console.log("Video URL:", videoUrl, animeName)


            const englishSubtitle = videoTracks.find(track => track.label === 'English')              //
            setVidTrack(englishSubtitle)                   //




            setWatching(videoUrl)
        } catch (error) {
            console.error("Error fetching episode:", error)
        }
    }

    useEffect(() => {
        console.log(vidTrack)
    }, [vidTrack])

    useEffect(() => {
        if (watching && videoRef.current) {
            // Initialize HLS.js if the source is an .m3u8 stream
            if (Hls.isSupported() && watching.endsWith(".m3u8")) {
                hlsRef.current = new Hls()
                hlsRef.current.loadSource(watching)
                hlsRef.current.attachMedia(videoRef.current)
                hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
                    // console.log("Manifest parsed and HLS is ready")
                })
            }
        }

        return () => {
            // Clean up HLS.js instance on component unmount
            if (hlsRef.current) {
                hlsRef.current.destroy()
            }
        }
    }, [watching])

    return (
        <Box minH="100vh" pt="200px" pb='100px'>
            <Center>
                <VStack w='100%'>
                    <Box
                        w={{ base: '100%', md: '70%', lg: '50%' }}
                        h="450px" // Set a fixed height
                        bg="gray.900"
                        transition="opacity 0.5s ease-in-out" // Smooth transition for fade-in
                    >
                        {watching ? (
                            <video
                                ref={videoRef}
                                controls
                                style={{ width: '100%', height: '100%' }}
                                autoPlay
                            >
                                {!watching.endsWith(".m3u8") && (
                                    <source src={watching} type="video/mp4" />
                                )}

                                {/* Add subtitle track dynamically from vidTrack state */}

                                <track
                                    kind={vidTrack.kind}
                                    label={vidTrack.label}
                                    src={vidTrack.file} // The file URL for the subtitles
                                    default='true' // Set as default if marked as true
                                />



                            </video>
                        ) : (
                            <Center h="100%"> {/* Ensures the spinner is vertically centered */}
                                <Spinner
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="blue.500"
                                    size="xl"
                                />
                            </Center>
                        )}
                    </Box>

                    <Box w={{ base: '100%', md: '70%', lg: '50%' }} p="4">
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
                            <Text pb="4" fontSize="lg" fontWeight="bold" >
                                Server : If the video isn't loading, try to switch servers.
                            </Text>


                            <VStack spacing="4" w="full">

                                {/* SUB Section */}
                                <Box w="full" bg="gray.700" p="2" borderRadius="md">
                                    <HStack w="full">
                                        <Box fontWeight="bold" color="white.100" bg='gray.800' p='8px' borderRadius='md'>SUB</Box>
                                        <Spacer />
                                        <HStack spacing="2">
                                            {sub.map((sub) => (
                                                <Button colorScheme="purple" onClick={() => handleEpisodeServer(sub.serverName)}>{sub.serverName}</Button>
                                            ))}
                                        </HStack>
                                    </HStack>
                                </Box>

                                {/* DUB Section */}
                                <Box w="full" bg="gray.700" p="2" borderRadius="md">
                                    <HStack w="full">
                                        <Box fontWeight="bold" color="white.100" bg='gray.800' p='8px' borderRadius='md'>DUB</Box>
                                        <Spacer />
                                        <HStack spacing="2">
                                            {dub.map((dub) => (
                                                <Button colorScheme="purple" onClick={() => handleEpisodeServer(dub.serverName)}>{dub.serverName}</Button>
                                            ))}
                                        </HStack>
                                    </HStack>
                                </Box>
                            </VStack>
                        </Container>
                    </Box>


                </VStack>
            </Center >
        </Box >

    )
}

export default WatchPage


