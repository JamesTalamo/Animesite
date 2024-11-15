import { Box, Image, Text, VStack, Flex } from "@chakra-ui/react"
import { useEffect } from "react"

import { Link, useParams } from "react-router-dom";

import { useAnimeStore } from "../product/AnimeStore";
import LoadingPage from "../components/LoadingPage";

let FocusPage = () => {

    const { selectedAnime, animeEpisodes, fetchFocusPageData, loading, moreInfoAnime } = useAnimeStore()
    const { animeId } = useParams();

    useEffect(() => {
        fetchFocusPageData(animeId)
    }, [])

    if (loading) {
        return <LoadingPage />
    }
    console.log(moreInfoAnime)

    return (

        <Box minH='100vh' bg='gray.700' align='center' pt='60px'>

            <Box maxW='container.xl' h={{ lg: '500px', base: '100vh' }}
                borderRadius='xl'
                overflow='hidden'
                position='relative'>
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

                            <Text    
                                align='center'
                                w={{ lg: '500px', base: '95%' }}
                                fontSize='40px'
                                fontWeight='bold'
                                color='white'
                            >{selectedAnime.name}</Text>
                            <Text     
                                color='white'
                                w={{ lg: '400px', base: '95%' }}
                                noOfLines={5}
                                align='center'
                            >
                                {selectedAnime.description}</Text>
                        </VStack>
                    </Box>
                </Flex>
            </Box>

            <Box maxW='container.xl' mt='10px' borderRadius='lg' overflow='hidden'>
                <Flex w='100%' align='center' justify='space-between' flexDirection={{ lg: 'row', base: 'column' }}>
                    <Box
                        p='10px'
                        border='1px rgba(255, 255, 255, 0.16) solid'
                        h='200px'
                        w={{ lg: '800px', base: '100%' }}
                        borderRadius='lg'>
                        <Text align='start' pl='2%' fontWeight='bold' fontSize='xl' color='white'>Details</Text>

                        <VStack align='start' p='2%'>
                            <Text fontWeight="bold" color='white'>
                                Name: <Text as="span" fontWeight="normal" color='white'>{selectedAnime.name}</Text>
                            </Text>
                            <Text fontWeight="bold" color='white'>
                                Japanese Name: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.japanese}</Text>
                            </Text>
                            <Text fontWeight="bold" color='white'>
                                Duration: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.duration}</Text>
                            </Text>
                            <Text fontWeight="bold" color='white'>
                                Status: <Text as="span" fontWeight="normal" color='white'>{moreInfoAnime.status}</Text>
                            </Text>


                        </VStack>
                    </Box>

                    <Box
                        p='10px'
                        h='200px'
                        w={{ lg: '400px', base: '100%' }}
                        borderRadius='lg'
                        border='1px rgba(255, 255, 255, 0.16) solid'
                        overflow='auto'
                    >
                        <Text align='start' pl='2%' fontWeight='bold' fontSize='xl' color='white'>Episodes</Text>

                        <Box
                            display="flex"
                            flexDirection="row"
                            align='start'
                            justify='start'
                            overflowY="auto"
                            flexWrap="wrap"
                            gap="3px"
                        >

                            {animeEpisodes.map((episode) => (
                                <Link to={`/watch/${selectedAnime.id}/${episode.number}`} >
                                    <Flex color='white' w='50px' height='50px' bg='gray.800' borderRadius='lg' justify='center' align='center' flexShrink='0' key={episode.id}>{episode.number}</Flex>
                                </Link>
                            ))}

                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box >
    )
}

export default FocusPage
