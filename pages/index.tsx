import Layout from "../components/Layout";
import React from "react";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

import Lists from "~/components/Enlish-Lists";

import { PhNotePencilBold } from "~/components/svgs/icon";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
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
    <Lists href="/make" title="タイトルとかを入れるところ" />
    <Lists href="/make" title="タイトルとかを入れるところ" />
    <Lists href="/make" title="タイトルとかを入れるところ" />
    <Lists href="/make" title="タイトルとかを入れるところ" />
    <Lists href="/make" title="タイトルとかを入れるところ" />
    <Lists href="/make" title="タイトルとかを入れるところ" />
    {/* <h2>こんにちは</h2> */}
  </Layout>
);

export default IndexPage;
