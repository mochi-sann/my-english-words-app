// import Link from "next/link";
// import Layout from "~/components/Layout";
import {
  Text,
  Button,
  Avatar,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  MenuGroup,
} from "@chakra-ui/react";

import { loginGoogle, logout } from "~/lib/firebase";

import AuthContext from "~/lib/AuthContext";

import React from "react";
// const Loginbuttom = () => {
//   console.log("Googleでログインボタンを押した");
//   console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
// };
import { LogosGoogleIcon } from "~/components/svgs/logo";
import { MdiLogout } from "~/components/svgs/icon";
// import { GrGithub } from "react-icons/gr";
export const LoginDrawer = ({ isOpen, onClose, finalFocusRef }: any) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={finalFocusRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Login your account</DrawerHeader>

            <DrawerBody>
              <Text mb="4">
                新規登録、ログインのどちらも以下のボタンから行うことができます。
              </Text>
              <Button
                w="100%"
                leftIcon={<LogosGoogleIcon className="w-5 h-5" />}
                onClick={() => {
                  loginGoogle("google");
                }}
              >
                <Text ml="3">Googleでログイン</Text>
              </Button>
              {/* <Button
                mt="2"
                w="100%"
                leftIcon={<GrGithub className="w-5 h-5" />}
                onClick={() => {
                  const eeeeeeeeee = async () => {
                    const resule = await loginGoogle("github");
                    console.log(resule);

                    return resule;
                  };
                  eeeeeeeeee();
                }}
              >
                <Text ml="3">Githubでログイン</Text>
              </Button> */}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export const LoginBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        Login
      </Button>
      {isOpen}
      <LoginDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </>
  );
};
const LoginPage = () => {
  const Bordercolor = useColorModeValue("gray.300", "gray.500");

  return (
    <>
      <AuthContext.Consumer>
        {(user: any) =>
          Object.keys(user).length === 0 ? (
            // <NextLink href="/login">
            <>
              <LoginBtn />
            </>
          ) : (
            // </NextLink>
            <Menu>
              <MenuButton>
                <Avatar
                  h="40px"
                  w="40px"
                  // border="2px"
                  borderColor={Bordercolor}
                  className="border-2"
                  // name={user.providerData[0].displayName}
                  src={user.providerData[0].photoURL}
                />
              </MenuButton>
              <MenuList zIndex="100">
                <MenuGroup title={"@" + user.providerData[0].displayName}>
                  <MenuItem as="button" onClick={logout}>
                    <MdiLogout className="mr-2" />
                    Logout
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          )
        }
      </AuthContext.Consumer>
    </>
  );
};

export default LoginPage;
