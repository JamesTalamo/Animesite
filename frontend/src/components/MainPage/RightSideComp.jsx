import { Box, HStack, Text, Center, VStack, Button } from "@chakra-ui/react"

import { useEffect, useState } from "react"

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

    useEffect(() => {
        console.log(select)
    }, [])

    return (
        <Box h='1040px' border={{ lg: '1px rgba(255, 255, 255, 0.16) solid', base: 'none' }} borderRadius='lg'>
            <Text color='white' fontWeight='bold' fontSize='xl' p='15px'>Top 10 Animes</Text>
            <Center>
                <HStack pb='10px' spacing='0'>
                    <Button
                        color="white"
                        fontWeight="bold"
                        h="50px"
                        w="100px"

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
                        w="100px"
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
                        w="100px"

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