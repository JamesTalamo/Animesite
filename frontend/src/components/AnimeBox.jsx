import { Box, Image } from "@chakra-ui/react"

import { Link } from "react-router-dom"

let AnimeBox = ({ anime }) => {
    return (
        <Link to={`/anime/${anime.id}`} >
            <Box
                shadow={'lg'}
                rounded={'lg'}
                overflow={'hidden'}
                transition={'all 0.3s'}
                cursor='pointer'
                w='150px'
                h='200px'
            >
                <Image
                    title={anime.name}
                    src={anime.poster}
                    objectFit='cover'
                    w='100%'
                    h='100%'
                    position='relative'
                    transition={'all 0.3s'}
                    _hover={{
                        transform: 'scale(1.1)',
                        shadow: 'xl'
                    }}
                />
            </Box>
        </Link>
    )
}

export default AnimeBox