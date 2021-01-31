import { useRouter } from "next/router";
import React from "react";

import { useDocument } from "react-firebase-hooks/firestore";
import { Box, Text, HStack, Input, Divider, Heading } from "@chakra-ui/react";

import Layout from "~/components/Layout/Layout";
import LoadingBox from "~/components/LoadingPeage/LoadingPeage";
import { db, auth } from "~/lib/firebase";

const Post = () => {
  const router = useRouter();
  const { docName } = router.query;
  const user = auth!.currentUser;

  if (user) {
    const [value, loading, error] = useDocument(
      db.doc("lists/" + user!.uid + "/" + user!.uid + "/" + docName),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    );

    return (
      <Layout>
        {/* <p>{user!.uid!}</p> */}
        {/* <p>Post: {JSON.stringify(docName)}</p> */}
        <Heading mt="4" mb="6">
          {value.data().values.title}
        </Heading>
        <Box>
          {/* {JSON.stringify(value, null, 2)} */}
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <LoadingBox />}
        </Box>
        <Box>
          {value && (
            <Box>
              {/* 問題を並べるところ */}
              <HStack w="100%">
                <Text w="50%">日本語</Text>
                <Text w="50%">答え</Text>
              </HStack>
              {value.data().values.collection.map((doc: any) => (
                <React.Fragment key={doc.id}>
                  {/* <Box className="bg-gray-200 p-2 rounded-lg my-2" as="pre">
                    {JSON.stringify(doc, null, 2)}
                  </Box> */}
                  <Divider my="2" />
                  <HStack w="100%">
                    <Text w="50%">{doc.japanese}</Text>
                    <Input w="50%" />
                  </HStack>
                </React.Fragment>
              ))}
            </Box>
          )}
        </Box>
        <Box className="bg-gray-200 p-2 rounded-lg" mt="6" as="pre">
          {value && (
            <span>Document: {JSON.stringify(value.data(), null, 2)}</span>
          )}
        </Box>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <p>ログインしていません</p>
      </Layout>
    );
  }
};

export default Post;
