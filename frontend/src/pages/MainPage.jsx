import { Box, VStack } from '@chakra-ui/react'

import { useAnimeStore } from '../product/AnimeStore.js'

import AnimeBoxContainer from '../components/AnimeBoxContainer'

import CarouselPage from '../components/Carousel.jsx'

import { useEffect } from 'react'


let MainPage = () => {

    let { featAnime, todayAnime, weeklyAnime, monthlyAnime, fetchMainPageData } = useAnimeStore()

    useEffect(() => {
        fetchMainPageData()
    }, [])

    return (
        <Box>
            <Box w="full" h="63vh" position='relative' pt='80px' overflow='hidden' bg='gray.800'>
                <CarouselPage featAnime={featAnime} />
            </Box>

            <Box w="full" align='center' bg='gray.800'>
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