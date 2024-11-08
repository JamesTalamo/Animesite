import { Link } from "react-router-dom"
import AnimeBox from "./AnimeBox"

import { Box, Heading, SimpleGrid } from "@chakra-ui/react"

let AnimeBoxContainer = ({ anime, animeHead, setSelected }) => {
    let handleSelect = (anime) => {
        setSelected(anime)
    }

    return (
        <Box position="relative" w="full">
            <Heading
                as='h2'
                pl='10%'
                mt='25px'
                mb='25px'
            >{animeHead}</Heading>


            <SimpleGrid
                columns={{
                    base: 2,
                    sm: 2,
                    md: 3,
                    lg: 5,
                }}
                spacing={5}
                w="full"
                pl="10%"
                mb='25px'
            >
                {anime.map((anime) => (
                    <Link to={`/anime/${anime.name}`} onClick={() => handleSelect(anime)}>
                        <AnimeBox anime={anime} />
                    </Link>
                ))}
            </SimpleGrid>


        </Box>
    )
}

export default AnimeBoxContainer