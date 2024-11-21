import { Box, HStack, Text, Center, VStack, Button } from "@chakra-ui/react"

import {  useState } from "react"

import RightSideCrads from "./RightSideCards"

let RightSideComp = ({ todayAnime, weeklyAnime, monthlyAnime }) => {

    let [select, setSelect] = useState(todayAnime)

    let today = () => {
        setSelect(todayAnime)
    }

    let week = () => {
        setSelect(weeklyAnime)
    }

    let month = () => {
        setSelect(monthlyAnime)
    }

    return (
        <Box  border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }} borderRadius='lg' mb='25px' w='100%' bg='gray.800'>
            <Text color='white' fontWeight='bold' fontSize='xl' p='15px' align={{lg:'start',base : 'center'}}><span style={{ color: '#E53E3E' }}>T</span>op 10 Animes</Text>
            <Center>
                <HStack pb='10px' spacing='0'>
                    <Button
                        color="white"
                        fontWeight="bold"
                        h="50px"
                        w="90px"

                        onClick={today}
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
                        autoFocus
                    >
                        Today
                    </Button>
                    <Button
                        color="white"
                        fontWeight="bold"
                        h="50px"
                        w="90px"
                        onClick={week}
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
                        Week
                    </Button>
                    <Button
                        color="white"
                        fontWeight="bold"
                        h="50px"
                        w="90px"

                        onClick={month}
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
                        Month
                    </Button>
                </HStack>
            </Center>


            <VStack spacing='1'>
                {select.map((anime) => (
                    <RightSideCrads anime={anime} key={anime.id} />
                ))}

            </VStack>
        </Box>
    )
}

export default RightSideComp