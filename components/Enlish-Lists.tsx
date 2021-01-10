import React from "react";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";

const Main = () => {
  const headerBg = useColorModeValue("#fff", "gray.900");

  return (
    <Box
      w="100%"
      boxShadow="base"
      border="1px"
      borderColor="gray.200"
      my="4"
      p="4"
      rounded="md"
      bg={headerBg}
    >
      <Heading as="h3" fontSize="2xl">
        タイトル
      </Heading>
      わーい
    </Box>
  );
};

export default Main;
