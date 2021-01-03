import Link from "next/link";
import Layout from "../components/Layout";
import React from "react";

import { Text } from "@chakra-ui/react";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Text className=" text-3xl font-semibold">
      Hello Next.js Docker Eslint prettierr TypeScript Jest tailwindcss
      chakra-ui Example 👋
    </Text>

    {/* <h2>こんにちは</h2> */}
    <a href="https://nextjs.org">Next.js!</a>
    <p>
      <Link href="/login">
        <a>login</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
