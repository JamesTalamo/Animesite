// import { Box, Flex } from "@chakra-ui/react"

// import { useParams } from "react-router-dom"

// import { useAnimeStore } from "../product/AnimeStore"
// import { useEffect } from "react"

// import LoadingPage from "../components/LoadingPage"
// import RightSideCompGenre from "../components/GenrePage/RightSideCompGenre"
// import LeftSideCompGenre from "../components/GenrePage/LeftSideCompGenre"
// import SmallGenreBox from "../components/GenrePage/SmallGenreBox"



// let GenrePage = () => {

//     let { fetchGenrePage, genrePageTopAiring, loading } = useAnimeStore()

//     let { genre, page } = useParams()

//     useEffect(() => {
//         fetchGenrePage(genre, page)
//     }, [genre, page])


//     if (loading) {
//         return <LoadingPage />
//     }

//     return (
//         <Box maxW={{ lg: 'container.xl', sm: '100%' }} pt='80px'>
//             <Flex width='100%' justify='space-between' align='center' flexDir={{ lg: 'row', base: 'column' }}  >
//                 <Box w={{ lg: '70%', base: '100%' }} h='100%'>
//                     <LeftSideCompGenre genreName={genre} />
//                 </Box>
//                 <Flex w={{ lg: '29%', base: '100%' }} borderRadius='lg' gap='15px' flexDirection='column' align='start' justify='start'>

//                     <RightSideCompGenre anime={genrePageTopAiring} />

//                     <SmallGenreBox />

//                 </Flex>
//             </Flex>
//         </Box>
//     )
// }

// export default GenrePage

import { Box, Flex } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useAnimeStore } from "../product/AnimeStore"
import { useEffect } from "react"
import LoadingPage from "../components/LoadingPage"
import RightSideCompGenre from "../components/GenrePage/RightSideCompGenre"
import LeftSideCompGenre from "../components/GenrePage/LeftSideCompGenre"
import SmallGenreBox from "../components/GenrePage/SmallGenreBox"

let GenrePage = () => {
    const { fetchGenrePage, genrePageTopAiring, loading } = useAnimeStore()
    const { genre, page } = useParams()
    const navigate = useNavigate()

    const currentPage = parseInt(page, 10) || 1  // Default to 1 if page is invalid

    const addPage = () => {
        const newPage = currentPage + 1
        navigate(`/genre/${genre}/${newPage}`)
    }

    const delPage = () => {
        const newPage = currentPage - 1
        if (newPage >= 1) {
            navigate(`/genre/${genre}/${newPage}`)
        }
    }

    useEffect(() => {
        fetchGenrePage(genre, currentPage)
    }, [genre, currentPage, fetchGenrePage])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <Box maxW={{ lg: 'container.xl', sm: '100%' }} pt='80px'>
            <Flex width='100%' justify='space-between' align='center' flexDir={{ lg: 'row', base: 'column' }}  >
                <Box w={{ lg: '70%', base: '100%' }} h='100%'>
                    <LeftSideCompGenre genreName={genre} addPage={addPage} delPage={delPage} />
                </Box>
                <Flex w={{ lg: '29%', base: '100%' }} borderRadius='lg' gap='15px' flexDirection='column' align='start' justify='start'>
                    <RightSideCompGenre anime={genrePageTopAiring} />
                    <SmallGenreBox />
                </Flex>
            </Flex>
        </Box>
    )
}

export default GenrePage
