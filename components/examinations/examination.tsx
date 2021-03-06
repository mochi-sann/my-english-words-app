// import { useRouter } from "next/router";
import React, { useState } from "react";
import { db, auth } from "~/lib/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { Box, Text, HStack, Divider, Heading, Button } from "@chakra-ui/react";

import Layout from "~/components/Layout/Layout";
import LoadingBox from "~/components/LoadingPeage/LoadingPeage";
import ExamJaEn from "~/components/examJaEn/ExamJaEn";

type Props = { docName: any };
const Post = ({ docName }: Props) => {
  // const router = useRouter();
  // const { docName } = router.query;
  const user = auth!.currentUser;
  if (user) {
    const [CheckAnswer, setCheckAnswer] = useState(false);
    const userUid = user!.uid || 123;
    // if (user) {
    const [value, loading, error] = useDocument(
      db.doc("lists/" + userUid + "/" + userUid + "/" + docName),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    );

    return (
      <Layout title={docName}>
        {/* <p>{user!.uid!}</p> */}
        {/* <p>Post: {JSON.stringify(docName)}</p> */}
        <Heading mt="4" mb="6">
          {/* {value.data().values.title} */}
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
                  {/* <HStack w="100%">
                      <Text w="50%">{doc.japanese}</Text>
                      <Input w="50%" />
                    </HStack> */}
                  <ExamJaEn
                    English={doc.english}
                    japanese={doc.japanese}
                    ShowAnswer={CheckAnswer}
                  />
                </React.Fragment>
              ))}
            </Box>
          )}
        </Box>
        <Button
          isChecked={CheckAnswer}
          onClick={() => {
            if (CheckAnswer) {
              setCheckAnswer(false);
            } else {
              setCheckAnswer(true);
            }
          }}
          // onChange={(e) => {
          //   setCheckAnswer(true);
          // }}
          my="2"
        >
          答えを
          {CheckAnswer ? "非表示" : "表示"}
        </Button>
        {/* <Box className="bg-gray-200 p-2 rounded-lg" mt="6" as="pre">
          {value && (
            <span>Document: {JSON.stringify(value.data(), null, 2)}</span>
          )}
        </Box> */}
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
