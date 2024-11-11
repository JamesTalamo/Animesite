import { Box, Container, VStack } from '@chakra-ui/react'

import AnimeBoxContainer from '../components/AnimeBoxContainer'

import { useAnimeStore } from '../product/AnimeStore.js'
import CarouselPage from '../components/Carousel.jsx'


let MainPage = () => {

    let { featAnime, todayAnime, weeklyAnime, monthlyAnime } = useAnimeStore()
    console.log(featAnime)
    return (
        <Box>
            <Box w="full" h="63vh" position='relative' pt='80px' overflow='hidden'>
                <CarouselPage featAnime={featAnime} />
            </Box>

            <Box w="full" align='center'>
                <VStack spacing={6}>

                    <AnimeBoxContainer anime={todayAnime} animeHead={'Top Anime Today'} />
                    <AnimeBoxContainer anime={weeklyAnime} animeHead={'Top Anime Week'} />
                    <AnimeBoxContainer anime={monthlyAnime} animeHead={'Top Anime Month'} />
                </VStack>
            </Box>
        </Box >

    )
}

export default MainPage