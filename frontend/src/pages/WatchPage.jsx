import { Box, Center, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Hls from "hls.js" // Import Hls.js for handling HLS streams

let WatchPage = ({ episodes }) => {
    const { episode } = useParams()
    const [watching, setWatching] = useState('')
    const videoRef = useRef(null) // Ref for the video element
    const hlsRef = useRef(null) // Ref for Hls.js instance

    useEffect(() => {
        if (episode && episodes[episode - 1]) {
            const episodeId = episodes[episode - 1].episodeId
            console.log(episodeId)
            fetchEpisode(episodeId)
        }
    }, [episode, episodes])

    const fetchEpisode = async (episodeId) => {
        try {
            const res = await fetch(`http://localhost:4000/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=hd-1&category=sub`)
            const data = await res.json()

            console.log(data)

            const videoUrl = data.data.sources[0].url
            console.log("Video URL:", videoUrl)
            setWatching(videoUrl)
        } catch (error) {
            console.error("Error fetching episode:", error)
        }
    }

    useEffect(() => {
        if (watching && videoRef.current) {
            // Initialize HLS.js if the source is an .m3u8 stream
            if (Hls.isSupported() && watching.endsWith(".m3u8")) {
                hlsRef.current = new Hls()
                hlsRef.current.loadSource(watching)
                hlsRef.current.attachMedia(videoRef.current)
                hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
                    console.log("Manifest parsed and HLS is ready")
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
        <Box minH="100vh" pt='200px'>
            {watching ? (
                <Center>
                    <video
                        ref={videoRef}
                        controls
                        height="auto"
                        style={{ maxWidth: "800px" }}
                    >
                        {!watching.endsWith(".m3u8") && (
                            <source src={watching} type="video/mp4" />
                        )}

                        Your browser does not support the video tag.
                    </video>
                </Center>
            ) : (
                <Center>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </Center>
            )}
        </Box>
    )
}

export default WatchPage


