import { Box, Container, Heading, Image, Text, VStack, Flex } from "@chakra-ui/react"
import { useEffect } from "react"

import { Link, useParams } from "react-router-dom";

import { useAnimeStore } from "../product/AnimeStore";

let FocusPage = () => {

    const { selectedAnime, animeEpisodes, fetchFocusPageData } = useAnimeStore()
    const { animeId } = useParams();

    useEffect(() => {
        fetchFocusPageData(animeId)
    }, [])

    console.log(selectedAnime)

    return (
        <Box minH='100vh' bg='gray.700' align='center' pt='60px'>

            <Box maxW='container.xl' h={{lg:'500px', sm:'100vh'}} borderRadius='xl' overflow='hidden' position='relative'>
                <Flex
                    w='100%'
                    height='100%'
                    display='flex'
                    flexDirection={{ base: 'column', lg: 'row' }}
                    align="center"
                    justify="center"
                    position="relative"
                    gap='50px'
                >
                    {/* Background image */}

                    <Image
                        position='absolute'
                        src={selectedAnime.poster}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        alt="Anime Poster"
                        filter="blur(10px)"
                        opacity="0.1"
                    />


                    {/* Content */}
                    <Box>
                        <Image
                            src={selectedAnime.poster}
                            position="relative"
                            w='200px'
                            h='300px'
                            borderRadius='xl'
                        />
                    </Box>

                    <Box align='start'>
                        <VStack>
                            {/* <Text
                                fontWeight='bold'
                                color='#FEB2B2'
                            >{selectedAnime.stats.rating}</Text> */}
                            <Text
                                align='center'
                                w='500px'
                                fontSize='40px'
                                fontWeight='bold'
                                color='white'
                            >{selectedAnime.name}</Text>
                            <Text
                                color='white'
                                w='400px'
                                noOfLines={5}>{selectedAnime.description}</Text>
                        </VStack>
                    </Box>
                </Flex>
            </Box>

            <Container maxW='container.xl'>
                <Heading as='h5' align='center' bg='gray.900' color='white'>
                    Episodes
                </Heading>
                <VStack spacing='10px'>
                    {animeEpisodes.map((episode) => (
                        <Box w="100%" h="50px" bg="gray.600" key={episode.episodeId}>
                            <Link to={`/watch/${selectedAnime.id}/${episode.number}`} >
                                <Flex justify="space-between" align="center" w="100%" h="100%" spacing='50px' pl={{ lg: '100px', sm: '50px' }} pr={{ lg: '100px', sm: '50px' }}>
                                    <Text textAlign="center" fontWeight='bold' color='white'>{episode.number}</Text>
                                    <Text textAlign="center" fontWeight='bold' fontSize={{ lg: "md", sm: 'sm' }} color='white'>{episode.title}</Text>
                                </Flex>
                            </Link>
                        </Box>

                    ))}


                </VStack>
            </Container>
        </Box >
    )
}

export default FocusPage
