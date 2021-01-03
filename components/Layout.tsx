import React, { ReactNode, SVGProps } from "react";

import NextLink from "next/link";
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
} from "@chakra-ui/react";

function FaSolidMoon(props: SVGProps<SVGSVGElement>) {
  // 月
  return (
    <svg
      focusable="false"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792c7.068-8.708-.639-21.43-11.562-19.35c-124.203 23.654-238.262-71.576-238.262-196.954c0-72.222 38.662-138.635 101.498-174.394c9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256c0 141.309 114.511 256 256 256z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function IcRoundWbSunny(props: SVGProps<SVGSVGElement>) {
  // 太陽
  return (
    <svg
      focusable="false"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

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

  const HeaderTextColor = useColorModeValue("#000", "#fff");
  return (
    <>
      <HeadsDeta title={title}>
        {/* <link rel="shortcut icon" href="open-book.png" type="image/x-icon" /> */}
      </HeadsDeta>
      <Flex
        bg={headerBg}
        position="sticky"
        w="100vw"
        top="0"
        left="0"
        boxShadow="md"
        p="2"
      >
        <Container maxWidth="800px" p="0">
          <Flex>
            <Box>
              <NextLink href="/">
                <Link href="/">
                  <Heading color={HeaderTextColor} as="h1" size="lg">
                    Chakra App
                  </Heading>
                </Link>
              </NextLink>
            </Box>

            <Spacer />

            <Box>
              <ChangeDarkModeAndLightMode />
            </Box>
          </Flex>
        </Container>
      </Flex>

      <Container maxWidth="800px">{children}</Container>

      <Box bg={useColorModeValue("gray.200", "gray.700")}>
        <hr className="mt-4" />

        <Container maxWidth="800px" className="py-8">
          <Text className="text-center ">
            <Link href="https://github.com/Mochichi2003">Mochi</Link>
            が作りました
          </Text>
        </Container>
      </Box>
    </>
  );
};
export default Layout;
