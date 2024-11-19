import { Box, Text, Flex, Button} from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import { useAnimeStore } from "../../product/AnimeStore";
let WatchPageComp1 = ({episode}) => {

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
                <Button
                    color='#E53E3E'
                    w="40px"
                    h="40px"
                    cursor="pointer"
                    border='1px rgba(255, 255, 255, 0.16) solid'
                    bg='gray.800'
                    _hover={{
                        backgroundColor: "rgba(229, 62, 62, 0.2)",
                        color: "#E53E3E",
                    }}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <ArrowBackIcon />
                </Button>

                <Box w='100px' h='40px' display='flex' justifyContent='center' alignItems='center'>
                    <Text fontWeight='bold' fontSize='xl' color='white'>
                        EP {episode}
                    </Text>
                </Box>

                <Button
                    color='#E53E3E'
                    w="40px"
                    h="40px"
                    cursor="pointer"
                    border='1px rgba(255, 255, 255, 0.16) solid'
                    bg='gray.800'
                    _hover={{
                        backgroundColor: "rgba(229, 62, 62, 0.2)",
                        color: "#E53E3E",
                    }}
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <ArrowForwardIcon />
                </Button>
            </Flex>

        </Box>
    )
}

export default WatchPageComp1