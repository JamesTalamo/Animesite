
import React from 'react'

import { Box, Button, Flex, Heading, HStack, Image, Input, useDisclosure, Text } from '@chakra-ui/react'
import { Search2Icon, HamburgerIcon } from '@chakra-ui/icons'

import { Link } from 'react-router-dom'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box w='full' zIndex='5' position='fixed' align='start' p='20px' bg='gray.900'>
            <HStack>
                <Button colorScheme='purple' onClick={onOpen}  >
                    <HamburgerIcon fontSize='20px' />
                </Button>

                <Link to='/'>
                    <Heading as='span' pl='25px'
                        fontSize={{ base: '2xl', lg: '4xl' }}
                        color='white'
                    >
                        Anime WEEB
                    </Heading>
                </Link>
            </HStack>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent bg='gray.700'>
                    <DrawerCloseButton 
                        color='white'
                    />
                    <DrawerHeader>
                        <Link to='/'>
                            <Flex align='center' justify='center'>
                                <Image
                                    src="/assets/navbarAssets/Frame%2072.png"
                                />
                            </Flex>
                        </Link>
                    </DrawerHeader>

                    <DrawerBody>
                        <Input
                            placeholder='Search Anime'
                            focusBorderColor="purple.200"
                            _placeholder={{ color: "white", fontWeight: "bold" }}
                        />
                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </Box>


    )
};

export default Navbar;
