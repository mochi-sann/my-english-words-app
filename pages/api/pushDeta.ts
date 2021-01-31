import { db } from "~/lib/firebase.ts";
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    // Process a POST request
    console.log(req.body);
    try {
      await db
        .collection("lists")
        .doc(req.body.userUid) // userのuidごとに別れて格納されるようにする
        .collection(req.body.userUid) // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime
        .doc(req.body.docName)
        .set(req.body);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(200).json({ status: "success", err: error });
    }
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: "John Doe" });
  }
}
