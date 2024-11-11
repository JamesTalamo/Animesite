import { Link } from "react-router-dom"
import AnimeBox from "./AnimeBox"

import { Box, Heading, SimpleGrid } from "@chakra-ui/react"


let AnimeBoxContainer = ({ anime, animeHead }) => {

    let handleSelect = (anime) => {
        setSelected(anime)
    }

    return (
        <Box w={{ lg: 'container.xl', md: 'container.md', sm: 'container.sm' }}>
            <Heading
                align='start'
            >{animeHead}</Heading>


            <SimpleGrid
                columns={{
                    base: 5,
                    sm: 5,
                    md: 5,
                    lg: 5,
                }}
                spacing={4}
                mb='25px'

            >
                {anime.map((anime) => (
                    <Link to={`/anime/${anime.id}`} onClick={() => handleSelect(anime)}>
                        <AnimeBox key={anime.id} anime={anime} />
                    </Link>
                ))}
            </SimpleGrid>


        </Box>
    )
}

export default AnimeBoxContainer