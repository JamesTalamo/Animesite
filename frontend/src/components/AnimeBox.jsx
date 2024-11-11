import { Box, Image } from "@chakra-ui/react"

let AnimeBox = ({ anime }) => {
    return (
        <Box
            bg='yellow's
            shadow={'lg'}
            rounded={'lg'}
            overflow={'hidden'}
            transition={'all 0.3s'}
            _hover={{ transform: 'translateY(-5px)', shadow: '1px' }}
            cursor='pointer'
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
    )
}

export default AnimeBox