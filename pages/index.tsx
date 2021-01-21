import Layout from "../components/Layout/Layout";
import React from "react";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

import Lists from "~/components/MainpageLIsts/EnlishLists";

import { PhNotePencilBold } from "~/components/svgs/icon";
import WordLists from "components/WordLists/WordLists";

const IndexPage = () => (
  <Layout title="Home">
    <NextLink href="/make">
      <Button
        leftIcon={<PhNotePencilBold className="w-8 h-8" />}
        size="lg"
        my="4"
        colorScheme="blue"
        w="100%"
        href="/make"
      >
        問題集を作る
      </Button>
    </NextLink>
    <hr />
    <WordLists />
    <Lists href="/make" Listtitle="タイトル" />
    <Lists href="/make" Listtitle="タイトル" />
    <Lists href="/make" Listtitle="タイトル" />
    <Lists href="/make" Listtitle="タイトル" />
    <Lists href="/make" Listtitle="タイトル" />
    <Lists href="/make" Listtitle="タイトル" />
    {/* <h2>こんにちは</h2> */}
  </Layout>
);

export default IndexPage;
