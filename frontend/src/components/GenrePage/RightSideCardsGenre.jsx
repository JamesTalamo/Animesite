
import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let RightSideCardsGenre = ({anime}) => {
    return (
        <Link to={`/anime/${anime.id}`} style={{ width: '100%' }}>
            <Box
                pl='25px'
                cursor='pointer'
                w='100%'
                h='88px'
                transition="all 0.3s"
                borderRadius='lg'
                _hover={{
                    backgroundColor: '#2D3748',
                }}
                display='flex'
                alignItems='center'
                justifyContent='flex-start'
                gap={0}
            >

                <Image

                    src={anime.poster}
                    alt={anime.name}
                    w='60px'
                    h='90%'
                    objectFit='fit'
                    borderRadius='md'
                />



                <Box p='5%'>
                    <Text fontWeight='bold' align='start' color='white' overflow='hidden' noOfLines={2}>
                        {anime.name}
                    </Text>
                </Box>

            </Box>
        </Link>
    )
}

export default RightSideCardsGenre