import { Box, Button, Image, Flex, Text, VStack, useDisclosure, HStack, Container } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import AnimeBoxContainer from '../components/AnimeBoxContainer'

import { useAnimeStore } from '../product/AnimeStore.js'


let MainPage = () => {

    let { page, setPage, featAnime, todayAnime, weeklyAnime, monthlyAnime } = useAnimeStore()

    const { isOpen, onOpen, onClose } = useDisclosure()


    let handleSetPageLeft = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    };

    let handleSetPageRight = () => {
        if (page < 9) {
            setPage(page + 1);
        }
    };

    return (
        <Box>

            {/* <Box position="relative" w="full" h={{ base: '90vh', lg: '100vh' }}>
              
                <Image
                    src={featAnime.poster}
                    alt="Anime Poster"
                    filter="blur(7px)"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    opacity={0.5}
                    position="absolute"
                    top={0}
                    right={0}
                    zIndex={-1}  // Ensure the image is behind other content
                    style={{
                        maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 00%, rgba(0, 0, 0, 0) 100%)', // Fade from center outwards
                        WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)', // For Safari
                    }}

                />


                <VStack pt={{ base: "25%", md: "15%", lg: "10%" }} spacing={20}>

                   
                    <Text
                        color="white"
                        fontSize={{ base: "sm", md: "md", lg: "lg" }}
                        fontWeight="bold"
                    >
                        {`RANK ${featAnime.rank}!`}
                    </Text>

                   
                    <Text
                        align='center'
                        color="white"
                        fontSize={{ base: "28px", md: "30px", lg: "80px" }}
                        fontWeight="bold"

                        w={{ base: "auto", md: "lg", lg: "3xl" }}
                    >
                        {featAnime.name}
                    </Text>

                    <HStack>
                      
                        <Button colorScheme='purple' size='lg' onClick={onOpen}>
                            Description
                        </Button>

                       
                        <Link to={`/anime/${featAnime.animeId}`}>
                            <Button colorScheme="purple" size="lg">
                                Watch Now
                            </Button>
                        </Link>
                    </HStack>

                    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{featAnime.name}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {featAnime.description}
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme="purple" mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>



                </VStack>





                <Flex
                    position="absolute"
                    bottom="20px"
                    right="20px"
                    gap={4}
                >
                    <Button
                        onClick={handleSetPageLeft}
                        colorScheme="purple"
                        aria-label="Go to previous page"
                    >
                        <ArrowBackIcon />
                    </Button>
                    <Button
                        onClick={handleSetPageRight}
                        colorScheme="purple"
                        aria-label="Go to next page"
                    >
                        <ArrowForwardIcon />
                    </Button>
                </Flex>
            </Box>  */}

            <Box w="full" h="100vh" position='relative'>

            </Box>

            <AnimeBoxContainer anime={todayAnime} animeHead={'Top Anime Today'} />
            <AnimeBoxContainer anime={weeklyAnime} animeHead={'Top Anime Week'} />
            <AnimeBoxContainer anime={monthlyAnime} animeHead={'Top Anime Month'} />
        </Box >

    )
}

export default MainPage