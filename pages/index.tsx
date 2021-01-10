import Layout from "../components/Layout";
import React from "react";
import NextLink from "next/link";
import { Text, Link } from "@chakra-ui/react";

import Lists from "~/components/Enlish-Lists";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Text className=" text-3xl font-semibold">
      Hello Next.js Docker Eslint prettierr TypeScript Jest tailwindcss
      chakra-ui Example 👋
    </Text>
    <NextLink href="/make">
      <Link href="/make">問題集を作る</Link>
    </NextLink>
    <Lists />
    <Lists />
    <Lists />
    <Lists />
    <Lists />
    <Lists />
    {/* <h2>こんにちは</h2> */}
  </Layout>
);

export default IndexPage;
