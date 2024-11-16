import { Box } from "@chakra-ui/react"
import { useEffect } from "react"

import { useParams } from "react-router-dom";

import { useAnimeStore } from "../product/AnimeStore";
import LoadingPage from "../components/LoadingPage";
// import AnimeBoxContainerReusable from '../components/FocusPage/AnimeBoxContainerReuseable'
import AnimeBoxContainer from "../components/AnimeBoxContainer";
import FocusPageComp2 from "../components/FocusPage/FocusPageComp2";
import FocusPageComp1 from "../components/FocusPage/FocusPageComp1";

let FocusPage = () => {

    const { relatedAnime, recoAnime, selectedAnime, animeEpisodes, fetchFocusPageData, loading, moreInfoAnime } = useAnimeStore()
    const { animeId } = useParams();

    useEffect(() => {
        fetchFocusPageData(animeId)
    }, [animeId])

    if (loading) {
        return <LoadingPage />
    }


    return (

        <Box minH='100vh' bg='gray.800' align='center'>

            <FocusPageComp1 selectedAnime={selectedAnime} />

            <Box maxW='container.xl' mt='10px' borderRadius='lg' overflow='hidden'>
                <FocusPageComp2 selectedAnime={selectedAnime} moreInfoAnime={moreInfoAnime} animeEpisodes={animeEpisodes} />

                <AnimeBoxContainer anime={recoAnime} animeHead={'Suggested Anime'}/>
                <AnimeBoxContainer anime={relatedAnime} animeHead={'Related Anime'}/>
            </Box>



        </Box >
    )
}

export default FocusPage
