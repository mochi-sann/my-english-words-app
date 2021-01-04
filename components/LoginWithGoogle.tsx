// import Link from "next/link";
// import Layout from "~/components/Layout";
import { Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import AuthContext from "~/lib/AuthContext";
import { logout } from "~/lib/firebase";
// const Loginbuttom = () => {
//   console.log("Googleでログインボタンを押した");
//   console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
// };

const LoginPage = () => {
  return (
    <>
      <AuthContext.Consumer>
        {(user) =>
          Object.keys(user).length === 0 ? (
            <NextLink href="/login">
              <Button>
                <Text>Login</Text>
              </Button>
            </NextLink>
          ) : (
            <Button onClick={logout}>LOG OUT</Button>
          )
        }
      </AuthContext.Consumer>
    </>
  );
};

export default LoginPage;
