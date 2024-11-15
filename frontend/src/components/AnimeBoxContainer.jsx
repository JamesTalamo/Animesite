import AnimeBox from "./AnimeBox"
import { Box, Heading, SimpleGrid } from "@chakra-ui/react"



let AnimeBoxContainer = ({ anime, animeHead }) => {

    return (
        <Box w={{ lg: 'container.xl', md: 'container.md', sm: 'container.sm' }} bg='gray.600' borderRadius='lg'>
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