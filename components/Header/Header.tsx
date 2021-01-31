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
  Tooltip,
} from "@chakra-ui/react";

import NextLink from "next/link";

import LoginWithGoogle from "~/components/Login/LoginAndLogoutButtom";
import { FaSolidMoon, IcRoundWbSunny, Siteicon } from "~/components/svgs/icon";

function ChangeDarkModeAndLightMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Tooltip hasArrow label="カラーモードを切り替える">
        <IconButton
          aria-label="dark mode Light mode change Button"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <IcRoundWbSunny /> : <FaSolidMoon />}
        </IconButton>
      </Tooltip>
    </>
  );
}
export interface HeaderProps {
  HeaderTitel: string;
}
const Header = ({ HeaderTitel = "仮タイトル" }: HeaderProps) => {
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
                  <Siteicon width="40" height="40" className="rounded-lg" />
                  {/* <Image
                    src="/icons/icon_512x512@2x.png"
                    width="40"
                    height="40"
                  /> */}
                  <Heading
                    ml="2"
                    as="h1"
                    fontSize="2xl"
                    textAlign={["center", "center"]}
                    color={useColorModeValue("#000", "#fff")}
                    display="flex"
                    alignItems="center"
                  >
                    {HeaderTitel}
                  </Heading>
                </Flex>
              </Link>
            </NextLink>
          </Box>

          <Spacer />

          <Box>
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
