import { useSearchParams} from "react-router-dom"
import { Box, Flex } from "@chakra-ui/react"

import { useEffect, useState } from "react"

import { useAnimeStore } from "../product/AnimeStore"

import LoadingPage from "../components/LoadingPage"

import SmallGenreBox from "../components/GenrePage/SmallGenreBox"
import LeftSideCompSearch from "../components/SearchPage/LeftSideCompSearch"


let SearchPage = () => {
    let [animes, setAnimes] = useState([])
    let [search] = useSearchParams()
    const animeName = search.get('q')

    let { searchAnime, loading } = useAnimeStore()

    let fetchDatas = async () => {
        let { animes } = await searchAnime(animeName)
        setAnimes(animes)
    }


    useEffect(() => {
        fetchDatas()
    }, [animeName])


    if (loading) {
        return <LoadingPage />
    }


    return (
        <Box maxW={{ lg: 'container.xl', sm: '100%' }} pt='80px'>
            <Flex width='100%' justify='space-between' align='start' flexDir={{ lg: 'row', base: 'column' }} >
                <Box w={{ lg: '70%', base: '100%' }} h='100%'>
                    <LeftSideCompSearch animeName={`Results for : ${animeName}`} animeData={animes}/>
                </Box>
                <Flex w={{ lg: '29%', base: '100%' }} borderRadius='lg' gap='15px' flexDirection='column' align='start' justify='start'>
                    <SmallGenreBox />
                </Flex>
            </Flex>
        </Box>
    )
}

export default SearchPage
