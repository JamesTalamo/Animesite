import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react"

let FocusPageComp1 = ({ selectedAnime }) => {
    return (

        <Box maxW='container.xl' h={{ lg: '500px', base: '100vh' }}
            borderRadius='xl'
            overflow='hidden'
            position='relative'>
            <Flex
                w='100%'
                height='100%'
                display='flex'
                flexDirection={{ base: 'column', lg: 'row' }}
                align="center"
                justify="center"
                position="relative"
                gap='50px'
            >
                {/* Background image */}

                <Image
                    position='absolute'
                    src={selectedAnime.poster}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    alt="Anime Poster"
                    filter="blur(10px)"
                    opacity="0.1"
                />

                <Box>
                    <Image
                        src={selectedAnime.poster}
                        position="relative"
                        w='200px'
                        h='300px'
                        borderRadius='xl'
                    />
                </Box>

                <Box align='start'>
                    <VStack>

                        <Text
                            align='center'
                            w={{ lg: '500px', base: '95%' }}
                            fontSize='40px'
                            fontWeight='bold'
                            color='white'
                        >{selectedAnime.name}</Text>
                        <Text
                            color='white'
                            w={{ lg: '400px', base: '95%' }}
                            noOfLines={5}
                            align='center'
                        >
                            {selectedAnime.description}</Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    )
}

export default FocusPageComp1