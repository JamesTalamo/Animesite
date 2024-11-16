
import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let RightSideCards = ({ anime }) => {
    return (
        <Link to={`/anime/${anime.id}`} style={{ width: '100%' }}>
            <Box

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
                gap={4}
            >
                <Box p='25px'>
                    <Text fontSize='xl' color='white' fontWeight='bold'>{`${anime.rank}`}</Text>
                </Box>


                <Image
                    src={anime.poster}
                    alt={anime.name}
                    w='60px'
                    h='90%'
                    objectFit='fit'
                    borderRadius='md'
                />



                <Box p='5%'>
                    <Text fontWeight='bold' align='start'>{anime.name}</Text>
                </Box>
            </Box>
        </Link>
    );
};

export default RightSideCards;
