import { Box, VStack, Flex } from '@chakra-ui/react';
import { useAnimeStore } from '../product/AnimeStore.js';
import AnimeBoxContainer from '../components/AnimeBoxContainer.jsx';
import CarouselPage from '../components/MainPage/Carousel.jsx'
import LoadingPage from '../components/LoadingPage.jsx';
import { useEffect } from 'react';
import RightSideComp from '../components/MainPage/RightSideComp.jsx';


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

            <Box w='100%' >
                <Flex width='100%' justify='space-between' align='center' flexDir={{ lg: 'row', base: 'column' }} h='100%'>
                    <Box w={{ lg: '70%', base: '100%' }}>

                        <AnimeBoxContainer anime={todayAnime} animeHead={'Top Anime Today'} />
                        <AnimeBoxContainer anime={weeklyAnime} animeHead={'Top Anime Week'} />
                        <AnimeBoxContainer anime={monthlyAnime} animeHead={'Top Anime Month'} />

                    </Box>
                    <Box w={{ lg: '29%', base: '100%' }} h='100%'>
                        <RightSideComp todayAnime={todayAnime} weeklyAnime={weeklyAnime} monthlyAnime={monthlyAnime} />
                    </Box>
                </Flex>
            </Box>

        </Box>
    );
};

export default MainPage;
