import { Box, Text, Flex, Button } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import { useAnimeStore } from "../../product/AnimeStore";
let WatchPageComp1 = ({ episode }) => {

    let { selectedAnime } = useAnimeStore()
    return (
        <Box
            w='100%'
            h='100px'
            bg='gray.800'
            border="1px rgba(255, 255, 255, 0.16) solid"
            borderRadius='xl'
            display='flex'
            justifyContent="space-between"
            alignItems="center"
        >
            <Text
                p='25px'
                color='white'
                fontWeight='bold'
                fontSize='xl'
            >
                {selectedAnime.name}
            </Text>

            <Flex w='200px' h='100%' display='flex' justifyContent='center' alignItems='center'>


                <Box w='100px' h='40px' display='flex' justifyContent='center' alignItems='center'>
                    <Text fontWeight='bold' fontSize='xl' color='white'>
                        EP {episode}
                    </Text>
                </Box>


            </Flex>

        </Box>
    )
}

export default WatchPageComp1