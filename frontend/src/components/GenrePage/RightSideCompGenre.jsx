import { Box, Text, VStack, } from "@chakra-ui/react"

import RightSideCradsGenre from '../GenrePage/RightSideCardsGenre'

let RightSideCompGenre = ({ anime }) => {
    return (
        <Box  border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }} borderRadius='xl' >
            <Text color='white' fontWeight='bold' fontSize='xl' p='25px'>Top Airing Animes</Text>

            <VStack spacing='1'>
                {anime.map((anime) => (
                    <RightSideCradsGenre anime={anime} key={anime.id} />
                ))}

            </VStack>
        </Box>
    )
}

export default RightSideCompGenre