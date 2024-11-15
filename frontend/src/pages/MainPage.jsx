import { Box, VStack, Text, Grid, GridItem } from '@chakra-ui/react'

import { useAnimeStore } from '../product/AnimeStore.js'

import AnimeBoxContainer from '../components/AnimeBoxContainer'

import CarouselPage from '../components/Carousel.jsx'

import { useEffect } from 'react'


let MainPage = () => {

    let { featAnime, todayAnime, weeklyAnime, monthlyAnime, fetchMainPageData } = useAnimeStore()

    useEffect(() => {
        fetchMainPageData()
    }, [])

    console.log(featAnime)

    return (
        <Box maxW={{ lg: 'container.xl', sm: '100%' }}>

            <CarouselPage featAnime={featAnime} />


            <VStack spacing={6}>

                <AnimeBoxContainer anime={todayAnime} animeHead={'Top Anime Today'} />
                <AnimeBoxContainer anime={weeklyAnime} animeHead={'Top Anime Week'} />
                <AnimeBoxContainer anime={monthlyAnime} animeHead={'Top Anime Month'} />
            </VStack>
        </Box >

    )
}

export default MainPage