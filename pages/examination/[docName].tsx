import { useRouter } from "next/router";
import React from "react";

import { useDocument } from "react-firebase-hooks/firestore";
import { Box } from "@chakra-ui/react";

import Layout from "~/components/Layout/Layout";
import LoadingBox from "~/components/LoadingPeage/LoadingPeage";
import { db, auth } from "~/lib/firebase";

const Post = () => {
  const router = useRouter();
  const { docName } = router.query;
  const user = auth!.currentUser;
  // const [value, loading, error] = useDocumentOnce();
  // db
  //   .collection("lists")
  //   .doc(user!.uid)
  //   .collection(user!.uid)
  //   .doc(JSON.stringify(docName)),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   };
  // const [value, loading, error] = useDocument(
  //   db
  //     .collection("lists")
  //     .doc(user!.uid)
  //     .collection(user!.uid)
  //     .doc(JSON.stringify(docName)),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );

  if (user) {
    // const [value, loading, error] = useDocument(
    //   db.doc("lists/" + user!.uid + user!.uid + docName),
    // .collection("lists")
    // .doc(user!.uid)
    // .collection(user!.uid)
    // .doc(JSON.stringify(docName))
    // .get()
    //   {
    //     snapshotListenOptions: { includeMetadataChanges: true },
    //   }
    // );

    const [value, loading, error] = useDocument(
      db.doc("lists/" + user!.uid + "/" + user!.uid + "/" + docName),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    );

    return (
      <Layout>
        <p>{user!.uid!}</p>
        <p>Post: {JSON.stringify(docName)}</p>
        <Box>
          {/* {JSON.stringify(value, null, 2)} */}
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <LoadingBox />}
        </Box>
        <Box className="bg-gray-200 p-2 rounded-lg" as="pre">
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
