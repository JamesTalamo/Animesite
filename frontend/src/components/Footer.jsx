import { Box, Center, Flex, Text, Button, HStack, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Divider } from "@chakra-ui/react";

let Footer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box w="full" h="200px" bg="gray.800" mt='20px'>

            <Flex alignItems='center' justifyContent='center' p='10px'>
                <Text
                    p='10px'
                    color='white'
                    fontWeight='bold'
                    fontSize='20px'
                >
                    Anime <Text as='span' color='#E53E3E'>WEEB</Text>
                </Text>

                {/* Divider between Text */}
                <Divider orientation="vertical" borderColor="gray.700" height="50px" mx="15px" />

                <Box>
                    <Text
                        p='10px'
                        color='white'
                    >
                        Made by : <Text
                            as='span'
                            fontWeight='bold'
                            fontSize='20px'>James</Text>
                    </Text>
                </Box>
            </Flex>

            <Center>
                <Button
                    colorScheme="red"
                    onClick={onOpen}
                    w='200px'
                >
                    Creators Note.
                </Button>
            </Center>

            <Center pt='10px' color='gray.600'>
                This does not store any files on its server, it only provides links to media hosted on 3rd party services.
            </Center>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent borderRadius='xl'>
                    <ModalHeader color='white' bg='gray.700'>About Anime WEEB</ModalHeader>
                    <ModalCloseButton color='white' />
                    <ModalBody bg='gray.800'>
                        <Text color='white' fontWeight='bold'>
                            Hello, I'm <Text as='span' color='#E53E3E'>JAMES</Text>. I'm currently in my third year of my CS degree as of <Text as='span' color='#E53E3E'>11/21/2024</Text>.
                            <br></br>
                            <br></br>
                            I did not spend any money building this website!
                            <Box pt='20px'>
                                <Text>Tech Stack:</Text>
                                <HStack flexWrap='wrap'>
                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='React'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s'
                                    />

                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='V2 Chakra'
                                        src='https://avatars.githubusercontent.com/u/54212428?s=280&v=4'
                                    />


                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='Ant Design'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFMkgc-3Ic_ulT8KOXJCkvQeLLUlgo9TpOg&s'
                                    />
                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='React Slick Carousel'
                                        src='https://www.bacancytechnology.com/blog/wp-content/uploads/2023/07/React-Slick-Slider.webp'
                                    />

                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='Zustand'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s'
                                    />

                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='Video JS'
                                        src='https://avatars.githubusercontent.com/u/3287189?v=4'
                                    />

                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='Render'
                                        src='https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg'
                                    />

                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='Vercel'
                                        src='https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png'
                                    />


                                    <Image
                                        m='10px'
                                        h='50px'
                                        w='50px'
                                        bg='black'
                                        title='Vite'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4XOdTwDFjrNDoRbCH2vDqCNCKD9u8zVr_g&s'
                                    />
                                </HStack>
                            </Box>
                        </Text>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Footer;
