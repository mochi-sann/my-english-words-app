import React from "react";
import {
  Box,
  useColorModeValue,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface MainProps {
  title: string;
  href: string;
}
const Main = ({ title, href }: MainProps) => {
  return (
    <NextLink href={href}>
      <a href={href}>
        <Box
          w="100%"
          boxShadow="base"
          border="1px"
          my="4"
          p="4"
          rounded="md"
          borderColor={useColorModeValue("gray.200", "gray.600")}
          color={useColorModeValue("#000", "#fff")}
          bg={useColorModeValue("#fff", "gray.800")}
          transition="300ms"
          _hover={{
            bg: useColorModeValue("gray.100", "gray.900"),
          }}
        >
          <Heading as="h3" mb="2" fontSize="2xl">
            {title}
          </Heading>
          <UnorderedList
            color={useColorModeValue("#444", "#ccc")}
            fontWeight="400"
          >
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Box>
      </a>
    </NextLink>
  );
};

export default Main;
