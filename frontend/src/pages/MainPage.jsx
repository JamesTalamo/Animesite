import { Box, VStack } from '@chakra-ui/react';
import { useAnimeStore } from '../product/AnimeStore.js';
import AnimeBoxContainer from '../components/AnimeBoxContainer';
import CarouselPage from '../components/Carousel.jsx';
import LoadingPage from '../components/LoadingPage.jsx';
import { useEffect } from 'react';

let MainPage = () => {
    let { featAnime, todayAnime, weeklyAnime, monthlyAnime, fetchMainPageData, loading } = useAnimeStore();

    useEffect(() => {
        fetchMainPageData();
    }, []);


    if (loading) {
        return <LoadingPage />;
    }

    return (
        <Box maxW={{ lg: 'container.xl', sm: '100%' }} >
            <CarouselPage featAnime={featAnime} />

            <VStack spacing={6} align={{ lg: 'start', base: 'center' }}>
                <AnimeBoxContainer anime={todayAnime} animeHead={'Top Anime Today'} />
                <AnimeBoxContainer anime={weeklyAnime} animeHead={'Top Anime Week'} />
                <AnimeBoxContainer anime={monthlyAnime} animeHead={'Top Anime Month'} />
            </VStack>

        </Box>
    );
};

export default MainPage;
