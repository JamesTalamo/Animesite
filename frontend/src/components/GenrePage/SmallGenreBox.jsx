import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { useAnimeStore } from "../../product/AnimeStore"

let SmallGenreBox = () => {
    let { genres } = useAnimeStore()

    return (
        <Box
            w="100%"
            borderRadius="xl"
            border='1px rgba(255, 255, 255, 0.16) solid'
            p={1}
            bg='gray.800'
        >
            <Text align="start" fontWeight="bold" fontSize="xl" pt="10px" pl='25px' color="white">
                <span style={{ color: '#E53E3E' }}>G</span>enres
            </Text>

            <Wrap spacing={1} justify="start" p="0px">
                {genres.map((genre, index) => (
                    <WrapItem key={index}>
                        <Link to={`/genre/${genre}/1`} style={{ width: '125px' }}>
                            <Box
                                key={index}
                                flex="0 1 125px"
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
                                color='white'

                            >
                                <Text p='25px' align='start'>
                                    {genre}
                                </Text>
                            </Box>
                        </Link>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}

export default SmallGenreBox
