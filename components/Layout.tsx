import React, { ReactNode } from "react";

import {
  Box,
  Link,
  useColorModeValue,
  Container,
  Text,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";

import AuthContext from "~/lib/AuthContext";
// import { analytics } from "~/lib/firebase";

import { LoginBtn } from "~/components/LoginAndLogoutButtom";
import MyHeader from "~/components/Header/Header.tsx";

import HeadsDeta from "~/components/HeadsDetas";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "No title" }: Props) => {
  // const headerBg = useColorModeValue("#fff", "gray.900");
  // analytics.logEvent("notification_received");
  // analytics.logEvent("open");

  // const HeaderTextColor = useColorModeValue("#000", "#fff");
  return (
    <Box minHeight="100vh">
      <HeadsDeta title={title}>
        {/* <link rel="shortcut icon" href="open-book.png" type="image/x-icon" /> */}
      </HeadsDeta>

      <MyHeader />
      {/* ヘッダーここまで */}
      <>
        {/* ログインしてないときはログインするように促してくるやつ */}
        <AuthContext.Consumer>
          {(user: any) =>
            Object.keys(user).length === 0 ? (
              // ログインしてないときに表示するやつ
              // <NextLink href="/login">
              <>
                <Box w="100%" py="100px" background="blue.100">
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
