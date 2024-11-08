import { Box, Container, Heading, Image, Text, VStack, Flex, HStack, Spacer } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import { Link, useParams } from "react-router-dom";


let FocusPage = ({ anime, setEpisodes, episodes }) => {
    const { animeName } = useParams();  // Retrieve the animeName parameter

    console.log(animeName)

    let [currentAnime, setCurrentAnime] = useState('')


    // console.log(anime.id)

    let fetchAnimeInfo = async (animeId) => {
        let res = await fetch(`http://localhost:4000/api/v2/hianime/anime/${animeId}`)
        let data = await res.json()

        let res2 = await fetch(`http://localhost:4000/api/v2/hianime/anime/${animeId}/episodes`)
        let data2 = await res2.json()

        console.log(data2.data.episodes)
        // console.log(data.data.anime)

        setEpisodes(data2.data.episodes)
        setCurrentAnime(data.data.anime.info)
    }

    useEffect(() => {
        fetchAnimeInfo(anime.id)
    }, [])

    useEffect(() => {
        console.log(currentAnime)
    }, [currentAnime])

    let test = () => {
        setEpisodeWatch('')
    }

    return (
        <Box minH='100vh' bg='gray.700'>
            <Container pt='120px' maxW="container.xl" pb='120px'>
                <VStack spacing='100px'>
                    <Flex justifyContent='center' align='center' gap={{ lg: '200px', sm: '20px' }} flexDir={{ lg: 'row', sm: 'column' }}>
                        <Image
                            src={currentAnime.poster}
                        />

                        <Container>
                            <VStack >
                                <Heading>
                                    {currentAnime.name}
                                </Heading>
                                <Text fontSize='sm' maxW='500px' alignContent='center'>
                                    {currentAnime.description}
                                </Text>
                            </VStack>
                        </Container>


                    </Flex>


                    <Container maxW='container.xl'>
                        <Heading as='h5' align='center' bg='gray.900'>
                            Episodes
                        </Heading>
                        <VStack spacing='10px'>
                            {episodes.map((episode) => (

                                <Box w="100%" h="50px" bg="gray.600" key={episode.number}>
                                    <Link to={`/watch/${currentAnime.name}/${episode.number}`}>
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
