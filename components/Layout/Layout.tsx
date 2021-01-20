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

import { LoginBtn } from "@components/Login/LoginAndLogoutButtom";
import MyHeader from "~/components/Header/Header";

import HeadsDeta from "~/components/HeadsDetas";
import { auth } from "~/lib/firebase";
export type Props = {
  children?: ReactNode;
  title?: string;
  IsUserLogin?: boolean;
};

const Layout = ({
  children,
  title = "No title",
  IsUserLogin = false,
}: Props) => {
  // const headerBg = useColorModeValue("#fff", "gray.900");
  // analytics.logEvent("notification_received");
  // analytics.logEvent("open");
  const user = auth!.currentUser;

  // const HeaderTextColor = useColorModeValue("#000", "#fff");
  return (
    <Box minHeight="100vh">
      <HeadsDeta title={title}>
        {/* <link rel="shortcut icon" href="open-book.png" type="image/x-icon" /> */}
      </HeadsDeta>

      <MyHeader HeaderTitel="名無し" />
      {/* ヘッダーここまで */}
      <>
        {/* ログインしてないときはログインするように促してくるやつ */}
        {(() => {
          if (user || IsUserLogin) {
            return (
              <>
                <Container maxWidth="800px">{children}</Container>
              </>
            );
          } else {
            return (
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
            );
          }
        })()}
      </>
      {/* Footer */}
      <Box h="150px"></Box>
      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        position="absolute"
        w="100%"
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
