import { Box, Button, Text } from "@chakra-ui/react";
import { useAnimeStore } from "../../product/AnimeStore";

const ServerContainer = ({ changeServer }) => {
  const { sub, dub } = useAnimeStore();

  return (
    <Box
      borderRadius="xl"
      border="1px rgba(255, 255, 255, 0.16) solid"
      w="100%"
      bg="gray.800"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="25px"
      flexWrap="wrap" // Allow wrapping on small screens
      gap="15px"
    >

      <Box
        w='100%'
        h="auto"
        bg="gray.800"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center" // Center align text for small screens
        flexShrink={0}
      >
        <Text color="white" fontWeight="bold">
          If current server doesn't work, please try other servers.
        </Text>
      </Box>

      {/* Servers Box */}
      <Box
        w="100%"
        h="auto"
        bg="gray.800"
        display="flex"
        alignItems="start"
        justifyContent="space-around"
        flexDirection="column"
        p="10px"
        borderRadius="lg"
        gap="10px"
      >
        {/* Sub Servers */}
        <Box
          borderRadius='lg'
          w="100%"
          display="flex"
          flexDirection={{ base: "column", sm: "row" }} // Stack on small screens
          alignItems="center"
          gap="10px"
          bg='gray.700'
        >
          <Text color="white" fontWeight="bold" w="100px" flexShrink={0}>
            Sub
          </Text>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="start"
            gap="10px"
            flexWrap="wrap"
          >
            {sub.map((server, index) => (
              <Button
                cursor='pointer'
                fontSize='sm'
                p="10px"
                key={index}
                w={{ base: "auto", sm: "auto" }} // Adjust width for small screens
                bg="gray.800"
                border="1px rgba(255, 255, 255, 0.16) solid"
                onClick={() => changeServer(server.serverName, "sub")}
                color="white"
                _hover={{ bg: "gray.700" }}
              >
                {server.serverName}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Dub Servers */}
        <Box
          borderRadius='lg'
          w="100%"
          display="flex"
          flexDirection={{ base: "column", sm: "row" }} // Stack on small screens
          alignItems="center"
          gap="10px"
          bg='gray.700'
        >
          <Text color="white" fontWeight="bold" w="100px" flexShrink={0}>
            Dub
          </Text>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="start"
            gap="10px"
            flexWrap="wrap"
          >
            {dub.map((server, index) => (
              <Button
                cursor='pointer'
                fontSize='sm'
                p="10px"
                key={index}
                w={{ base: "auto", sm: "auto" }}
                bg="gray.800"
                border="1px rgba(255, 255, 255, 0.16) solid"
                onClick={() => changeServer(server.serverName, "dub")}
                color="white"
                _hover={{ bg: "gray.700" }}
              >
                {server.serverName}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServerContainer;

