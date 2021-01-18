import React from "react";
import {
  Flex,
  Spacer,
  Box,
  useColorMode,
  IconButton,
  Link,
  Heading,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

import NextLink from "next/link";
import Image from "next/image";
import LoginWithGoogle from "~/components/LoginAndLogoutButtom";
import { FaSolidMoon, IcRoundWbSunny } from "~/components/svgs/icon";

function ChangeDarkModeAndLightMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        aria-label="dark mode Light mode change Button"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <IcRoundWbSunny /> : <FaSolidMoon />}
      </IconButton>
    </>
  );
}

const Header = () => {
  const headerBg = useColorModeValue("#fff", "gray.900");

  return (
    <Flex
      bg={headerBg}
      position="sticky"
      w="100%"
      top="0"
      left="0"
      boxShadow="md"
      p="2"
      zIndex="100"
    >
      <Container maxWidth="900px" px="2">
        <Flex>
          <Box h="40px">
            <NextLink href="/">
              <Link href="/" h="40px">
                <Flex>
                  <Image
                    src="/icons/icon_512x512@2x.png"
                    width="40"
                    height="40"
                  />
                  <Heading
                    ml="2"
                    fontSize="2xl"
                    textAlign={["center", "center"]}
                    color={useColorModeValue("#000", "#fff")}
                    display="flex"
                    alignItems="center"
                  >
                    名無し
                  </Heading>
                </Flex>
              </Link>
            </NextLink>
          </Box>

          <Spacer />

          <Box className="pr-2">
            <LoginWithGoogle />
          </Box>
          <Box ml="2">
            <ChangeDarkModeAndLightMode />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};
export default Header;
