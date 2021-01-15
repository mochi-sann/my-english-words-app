import React, { ReactNode } from "react";

import NextLink from "next/link";
import Image from "next/image";
import Head from "next/head";
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

type HeadsDetaPropsType = {
  children?: ReactNode;
  title?: string;
};

const HeadsDeta = ({ children, title }: HeadsDetaPropsType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* For new browsers - multisize ico  */}
      <link
        rel="icon"
        type="image/x-icon"
        sizes="16x16 32x32"
        href="favicon.ico"
      />
      {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="icons/favicon-152-precomposed.png"
      />
      {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="icons/favicon-144-precomposed.png"
      />
      {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="icons/favicon-120-precomposed.png"
      />
      {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="icons/favicon-114-precomposed.png"
      />
      {/* For iPhone 6+ */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="icons/favicon-180-precomposed.png"
      />
      {/* For first- and second-generation iPad: */}
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="icons/favicon-72-precomposed.png"
      />
      {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
      <link rel="apple-touch-icon" sizes="57x57" href="icons/favicon-57.png" />
      {/* For Old Chrome */}
      <link rel="icon" sizes="32x32" href="icons/favicon-32.png" />
      {/* For IE10 Metro */}
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="icons/favicon-144.png" />
      <meta name="theme-color" content="#ffffff" />
      {/* Chrome for Android */}
      <link rel="manifest" href="icons/manifest.json" />
      <link rel="icon" sizes="192x192" href="icons/favicon-192.png" />
      {children}
    </Head>
  );
};

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
