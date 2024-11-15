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
                _hover={{ transform: 'translateY(-5px)', shadow: '1px' }}
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
                />
            </Box>
        </Link>
    )
}

export default AnimeBox