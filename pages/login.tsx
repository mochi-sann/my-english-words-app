// import Link from "next/link";
import Layout from "~/components/Layout";
import { Text, Button } from "@chakra-ui/react";
import { login } from "~/lib/firebase";

import { LogosGoogleIcon } from "~/components/svgs/logo";
// const Loginbuttom = () => {
//   console.log("Googleでログインボタンを押した");
//   console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
// };

const LoginPage = () => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <Text>loginページ</Text>
      <Button
        leftIcon={<LogosGoogleIcon className="w-5 h-5" />}
        onClick={login}
      >
        <Text ml="3">Google</Text>
      </Button>
    </Layout>
  );
};

export default LoginPage;
