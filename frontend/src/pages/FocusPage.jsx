import { Box } from "@chakra-ui/react"
import { useEffect } from "react"

import { useParams } from "react-router-dom";

import { useAnimeStore } from "../product/AnimeStore";
import LoadingPage from "../components/LoadingPage";
import FocusAnimeBoxContainer from "../components/FocusPage/FocusAnimeBoxContainer";
import FocusPageComp2 from "../components/FocusPage/FocusPageComp2";
import FocusPageComp1 from "../components/FocusPage/FocusPageComp1";
import GenreBox from "../components/GenrePage/GenreBox";

let FocusPage = () => {

    const { relatedAnime, recoAnime, selectedAnime, fetchFocusPageData, loading } = useAnimeStore()
    const { animeId } = useParams();

    useEffect(() => {
        fetchFocusPageData(animeId)
    }, [animeId])

    if (loading) {
        return <LoadingPage />
    }


    return (

        <Box minH='100vh' bg='gray.900' align='center'>

            <FocusPageComp1 selectedAnime={selectedAnime} />

            <Box maxW='container.xl' mt='20px' borderRadius='lg' overflow='hidden'>
                <FocusPageComp2 />

                <FocusAnimeBoxContainer anime={recoAnime} animeHead={'Suggested Anime'} />
                <FocusAnimeBoxContainer anime={relatedAnime} animeHead={'Related Anime'} />

                <GenreBox />
            </Box>



        </Box >
    )
}

export default FocusPage
