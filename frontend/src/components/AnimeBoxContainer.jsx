import AnimeBox from "./AnimeBox"
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react"

import { Carousel } from "antd";



let AnimeBoxContainer = ({ anime, animeHead }) => {

    return (
        <Box w={{ lg: 'container.xl', md: 'container.md', sm: 'container.sm' }} pb='15px' bg='gray.800' borderRadius='lg' border='1px rgba(255, 255, 255, 0.16) solid'>
            <Heading
                align='start'
                color='white'
                pl='25px'
            >{animeHead}
            </Heading>



            <SimpleGrid
                w='100%'
                columns={{
                    base: 2,
                    sm: 2,
                    md: 5,
                    lg: 5,
                }}
                justify="center"  // Centers items horizontally in the grid
                align="center"       // Centers items vertically in the grid
                spacing={4}
            >

                {anime.map((anime) => (
                    <AnimeBox anime={anime} />
                ))}


            </SimpleGrid>

        </Box>
    )
}

export default AnimeBoxContainer