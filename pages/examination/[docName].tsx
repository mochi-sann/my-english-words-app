import { useRouter } from "next/router";
import Layout from "~/components/Layout/Layout";
import { auth } from "~/lib/firebase";

const Post = () => {
  const router = useRouter();
  const { docName } = router.query;
  const user = auth!.currentUser;
  if (user) {
    return (
      <Layout>
        <p>{user!.uid!}</p>
        <p>Post: {docName}</p>
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
