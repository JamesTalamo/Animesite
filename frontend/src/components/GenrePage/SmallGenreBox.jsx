// import { Box, Text, Flex } from "@chakra-ui/react"
// import { Link } from "react-router-dom"

// import { useAnimeStore } from "../../product/AnimeStore"

// let SmallGenreBox = () => {

//     let { genres } = useAnimeStore()

//     return (
//         <Box
//             w='100%'
//             h='845px'
//             borderRadius='xl'
//             border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
//         >
//             <Text align='Start' fontWeight='bold' fontSize='xl' p='25px' color='white'>Genres</Text>

//             <Flex>
//                 {genres.map((genre, index) => (
//                     <Link key={index} to={`/genre/${genre}/1`} style={{ width: '155px' }}>
//                         <Box
//                             key={index}
//                             flex="0 1 155px"
//                             h="40px"
//                             display="flex"
//                             alignItems="center"
//                             justifyContent="start"
//                             backgroundColor="gray.800"
//                             fontSize="sm"
//                             fontWeight="bold"
//                             borderRadius="md"
//                             cursor="pointer"
//                             _hover={{
//                                 backgroundColor: "rgba(229, 62, 62, 0.2)",
//                                 color: "#E53E3E",
//                             }}
//                             color='white'

//                         >
//                             <Text p='25px'>
//                                 {genre}
//                             </Text>
//                         </Box>
//                     </Link>
//                 ))}
//             </Flex>
//         </Box>
//     )
// }
// export default SmallGenreBox

import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { useAnimeStore } from "../../product/AnimeStore"

let SmallGenreBox = () => {
    let { genres } = useAnimeStore()

    return (
        <Box
            w="100%"
            borderRadius="xl"
            border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }}
        >
            <Text align="start" fontWeight="bold" fontSize="xl" p="25px" color="white">
                Genres
            </Text>

            <Wrap justify="start" p="25px">
                {genres.map((genre, index) => (
                    <WrapItem key={index}>
                        <Link to={`/genre/${genre}/1`}>
                            <Box
                                h="40px"
                                display="flex"
                                alignItems="center"
                                justifyContent="start"
                                backgroundColor="gray.800"
                                fontSize="sm"
                                fontWeight="bold"
                                borderRadius="md"
                                cursor="pointer"
                                _hover={{
                                    backgroundColor: "rgba(229, 62, 62, 0.2)",
                                    color: "#E53E3E",
                                }}
                                color="white"
                            >
                                <Text p="10px">{genre}</Text>
                            </Box>
                        </Link>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}

export default SmallGenreBox
