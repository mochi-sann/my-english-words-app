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
} from "@chakra-ui/react";
import NextLink from "next/link";
import AuthContext from "~/lib/AuthContext";
import { logout } from "~/lib/firebase";

// const Loginbuttom = () => {
//   console.log("Googleでログインボタンを押した");
//   console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
// };

const LoginPage = () => {
  const Bordercolor = useColorModeValue("gray.300", "gray.500");
  return (
    <>
      <AuthContext.Consumer>
        {(user: any) =>
          Object.keys(user).length === 0 ? (
            <NextLink href="/login">
              <Button>
                <Text>Login</Text>
              </Button>
            </NextLink>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar
                  h="40px"
                  w="40px"
                  // border="2px"
                  borderColor={Bordercolor}
                  className="border-2"
                  name={user.providerData[0].displayName}
                  src={user.providerData[0].photoURL}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )
        }
      </AuthContext.Consumer>
    </>
  );
};

export default LoginPage;
