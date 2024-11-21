import { Box, Center, Flex, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Divider } from "@chakra-ui/react";

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
                            I've learned a lot about how websites work through this project! I learned how to use libraries like Zustand, Chakra v2, Ant Design, React Slick, etc.
                            <br></br>
                            I've also learned so many things about React through this project, including routing, query parameters, and params.
                            <br></br>
                            <br></br>
                            I will continue to improve this website further. As I gain new knowledge, I will test it here!
                        </Text>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Footer;
