import { Box, Flex } from "@chakra-ui/react"

import { useParams } from "react-router-dom"

import { useAnimeStore } from "../product/AnimeStore"
import { useEffect } from "react"
import RightSideCompGenre from "../components/GenrePage/RightSideCompGenre"
import LeftSideCompGenre from "../components/GenrePage/LeftSideCompGenre"
import LoadingPage from "../components/LoadingPage"
import SmallGenreBox from "../components/GenrePage/smallGenreBox"


let GenrePage = () => {

    let { fetchGenrePage, genrePageTopAiring, loading } = useAnimeStore()

    let { genre, page } = useParams()
    console.log(genre, page)

    useEffect(() => {
        fetchGenrePage(genre, page)
    }, [genre, page])


    if (loading) {
        return <LoadingPage />
    }

    return (
        <Box maxW={{ lg: 'container.xl', sm: '100%' }} pt='80px'>
            <Flex width='100%' justify='space-between' align='center' flexDir={{ lg: 'row', base: 'column' }}  >
                <Box w={{ lg: '70%', base: '100%' }} h='100%'>
                    <LeftSideCompGenre genreName={genre} />
                </Box>
                <Flex w={{ lg: '29%', base: '100%' }} borderRadius='lg' gap='15px' flexDirection='column'>

                    <RightSideCompGenre anime={genrePageTopAiring} />

                    <SmallGenreBox />

                </Flex>
            </Flex>
        </Box>
    )
}

export default GenrePage