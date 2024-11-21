import { Search2Icon } from '@chakra-ui/icons';
import React from 'react';
import { Box, Flex, Text, Input, Button, InputGroup, InputRightElement, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    let [search, setSearch] = useState('');
    const navigate = useNavigate();

    const isSm = useBreakpointValue({ base: true, sm: true, md: false });

    const { isOpen, onOpen, onClose } = useDisclosure();

    let handleSubmit = () => {
        if (!search) return;
        navigate(`/search?q=${search}`);
        setSearch('');

    };

    return (
        <Box w='full' zIndex='16' position='fixed' align='center' h='60px' bg='gray.900'>
            <Box w={{ base: 'full', xl: 'container.xl' }} bg='red' h='100%'>
                <Flex
                    bg='gray.900'
                    justify='space-between'
                    align='center'
                    h='100%'
                >
                    <Link to='/'>
                        <Text
                            pl='25px'
                            color='white'
                            fontWeight='bold'
                            fontSize={{ base: '30px', lg: '40px' }}
                        >
                            Anime <Text as='span' color='#E53E3E'>WEEB</Text>
                        </Text>
                    </Link>

                    {isSm ? (
                        <>
                            <Button
                                position='relative'
                                right='25px'
                                onClick={onOpen}
                                color='white'
                                bg='gray.800'
                                border='1px rgba(255, 255, 255, 0.16) solid'
                                _hover={{
                                    backgroundColor: "rgba(229, 62, 62, 0.2)",
                                    color: "#E53E3E",
                                }}
                                _focus={{
                                    backgroundColor: "rgba(229, 62, 62, 0.2)",
                                    color: "#E53E3E",
                                }}
                            >
                                <Search2Icon color='white' />
                            </Button>
                            <Drawer isOpen={isOpen} onClose={onClose} size='sm' placement='top'>
                                <DrawerOverlay>
                                    <DrawerContent>
                                        <DrawerCloseButton color='white' />
                                        <DrawerHeader bg='gray.900' color='white'><Text as='span' color='#E53E3E'>S</Text>earch Anime</DrawerHeader>
                                        <DrawerBody bg='gray.900'>
                                            <InputGroup>
                                                <Input
                                                    color='white'
                                                    bg='gray.800'
                                                    focusBorderColor='red.500'
                                                    variant='filled'
                                                    placeholder='Search anime'
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                <InputRightElement>
                                                    <Button
                                                        type="submit"
                                                        bg='gray.800'
                                                        border='1px rgba(255, 255, 255, 0.16) solid'
                                                        _hover={{
                                                            backgroundColor: "rgba(229, 62, 62, 0.2)",
                                                            color: "#E53E3E",
                                                        }}
                                                        _focus={{
                                                            backgroundColor: "rgba(229, 62, 62, 0.2)",
                                                            color: "#E53E3E",
                                                        }}
                                                        onClick={handleSubmit}
                                                    >
                                                        <Search2Icon color='white' />
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                        </DrawerBody>
                                    </DrawerContent>
                                </DrawerOverlay>
                            </Drawer>
                        </>
                    ) : (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}>
                            <InputGroup position='relative'
                                right='25px'>
                                <Input

                                    color='white'
                                    bg='gray.800'
                                    focusBorderColor='red.500'
                                    variant='filled'
                                    w='500px'
                                    placeholder='Search anime'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <InputRightElement>
                                    <Button
                                        type="submit"
                                        bg='gray.800'
                                        border='1px rgba(255, 255, 255, 0.16) solid'
                                        _hover={{
                                            backgroundColor: "rgba(229, 62, 62, 0.2)",
                                            color: "#E53E3E",
                                        }}
                                        _focus={{
                                            backgroundColor: "rgba(229, 62, 62, 0.2)",
                                            color: "#E53E3E",
                                        }}
                                    >
                                        <Search2Icon color='white' />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </form>
                    )}
                </Flex>
            </Box>
        </Box>
    );
};

export default Navbar;
