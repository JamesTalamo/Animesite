import { Box, Container, Heading, Image, Text, VStack, Flex } from "@chakra-ui/react"
import { useEffect } from "react"

import { Link, useParams } from "react-router-dom";

import { useAnimeStore } from "../product/AnimeStore";

let FocusPage = () => {


    const { selectedAnime, setSelectedAnime, animeEpisodes, setAnimeEpisodes } = useAnimeStore()
    const { animeId } = useParams();  // Retrieve the animeName parameter

    useEffect(() => {
        fetchAnimeInfo(animeId)
    }, [])

    let fetchAnimeInfo = async (animeId) => {
        let animeInfo = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}`)
        let animeInfoData = await animeInfo.json()

        let animeEp = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v2/hianime/anime/${animeId}/episodes`)
        let animeEpData = await animeEp.json()

        setSelectedAnime(animeInfoData.data.anime.info)
        setAnimeEpisodes(animeEpData.data.episodes)

    }

    return (
        <Box minH='100vh' bg='gray.700'>
            <Container pt='120px' maxW="container.xl" pb='120px'>
                <VStack spacing='100px'>
                    <Flex
                        justifyContent="center"
                        align="center"
                        gap={{ lg: '200px', sm: '20px' }}
                        flexDir={{ lg: 'row', base: 'column' }}
                    >
                        <Image
                            src={selectedAnime.poster}
                            position="relative"
                            order={{ sm: 1, lg: 0 }} // On small screens, this will place the Image first
                            title={selectedAnime.name}
                        />

                        <Container order={{ sm: 2, lg: 0 }}> {/* Container will be below the Image on small screens */}
                            <VStack>
                                <Heading>
                                    {selectedAnime.name}
                                </Heading>
                                <Text fontSize="sm" alignContent="center">
                                    {selectedAnime.description}
                                </Text>
                            </VStack>
                        </Container>
                    </Flex>



                    <Container maxW='container.xl'>
                        <Heading as='h5' align='center' bg='gray.900'>
                            Episodes
                        </Heading>
                        <VStack spacing='10px'>
                            {animeEpisodes.map((episode) => (

                                <Box w="100%" h="50px" bg="gray.600">
                                    <Link to={`/watch/${selectedAnime.id}/${episode.number}`} >
                                        <Flex justify="space-between" align="center" w="100%" h="100%" spacing='50px' pl={{ lg: '100px', sm: '50px' }} pr={{ lg: '100px', sm: '50px' }}>
                                            <Text textAlign="center" fontWeight='bold'>{episode.number}</Text>
                                            <Text textAlign="center" fontWeight='bold' fontSize={{ lg: "md", sm: 'sm' }}>{episode.title}</Text>
                                        </Flex>
                                    </Link>
                                </Box>

                            ))}


                        </VStack>
                    </Container>
                </VStack>
            </Container >
        </Box >
    )
}

export default FocusPage
