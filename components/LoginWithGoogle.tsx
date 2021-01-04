// import Link from "next/link";
// import Layout from "~/components/Layout";
import { Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";

// const Loginbuttom = () => {
//   console.log("Googleでログインボタンを押した");
//   console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
// };

const LoginPage = () => {
  return (
    <NextLink href="/login">
      <Button>
        <Text>Login</Text>
      </Button>
    </NextLink>
  );
};

export default LoginPage;
