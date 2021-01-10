import React from "react";
import { Box, useColorModeValue, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
const Main = () => {
  const headerBg = useColorModeValue("#fff", "gray.900");

  return (
    <NextLink href="/make">
      <Link href="/make">
        <Box
          w="100%"
          boxShadow="base"
          border="1px"
          borderColor={useColorModeValue("gray.200", "gray.600")}
          my="4"
          p="4"
          rounded="md"
          color={useColorModeValue("#000", "#fff")}
          bg={headerBg}
          transition="300ms"
          _hover={{
            bg: useColorModeValue("gray.100", "gray.700"),
          }}
        >
          <Heading as="h3" mb="2" fontSize="2xl">
            タイトル
          </Heading>
          わーい
        </Box>
      </Link>
    </NextLink>
  );
};

export default Main;
