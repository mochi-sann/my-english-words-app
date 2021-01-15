import React, { ReactNode } from "react";

import NextLink from "next/link";
import Image from "next/image";

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
  Text,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";

import AuthContext from "~/lib/AuthContext";

import LoginWithGoogle, { LoginBtn } from "@components/LoginAndLogoutButtom";

import { FaSolidMoon, IcRoundWbSunny } from "~/components/svgs/icon";
import HeadsDeta from "~/components/HeadsDetas.tsx";

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

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const headerBg = useColorModeValue("#fff", "gray.900");

  // const HeaderTextColor = useColorModeValue("#000", "#fff");
  return (
    <Box minHeight="100vh">
      <HeadsDeta title={title}>
        {/* <link rel="shortcut icon" href="open-book.png" type="image/x-icon" /> */}
      </HeadsDeta>
      {/* ヘッダー */}
      <Flex
        bg={headerBg}
        position="sticky"
        w="100vw"
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
            <Box>
              <ChangeDarkModeAndLightMode />
            </Box>
          </Flex>
        </Container>
      </Flex>
      {/* ヘッダーここまで */}
      <>
        {/* ログインしてないときはログインするように促してくるやつ */}
        <AuthContext.Consumer>
          {(user: any) =>
            Object.keys(user).length === 0 ? (
              // ログインしてないときに表示するやつ
              // <NextLink href="/login">
              <>
                <Box w="100vw" py="100px" background="blue.100">
                  <Container maxWidth="900px" px="2">
                    <Center>
                      <Wrap>
                        <WrapItem>
                          <Text fontWeight="600" fontSize="3xl" color="black">
                            ログイン
                          </Text>
                        </WrapItem>
                        <WrapItem pl="8">
                          <LoginBtn />
                        </WrapItem>
                      </Wrap>
                    </Center>
                  </Container>
                </Box>
                <Container maxWidth="800px">
                  <Text fontSize="2xl" fontWeight="600" my={4}>
                    ログインすると使えます
                  </Text>
                </Container>
              </>
            ) : (
              // </NextLink>
              <>
                <Container maxWidth="800px">{children}</Container>
              </>
            )
          }
        </AuthContext.Consumer>
        {/* メインの記事が入るところ */}
      </>
      {/* Footer */}
      <Box h="150px"></Box>
      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        position="absolute"
        w="100vw"
        bottom="0"
        zIndex="10"
      >
        <Container maxWidth="800px" className="py-8">
          <Text className="text-center ">
            <Link href="https://github.com/Mochichi2003">Mochi</Link>
            が作りました
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
export default Layout;
