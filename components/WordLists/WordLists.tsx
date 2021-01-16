import { db, auth } from "~/lib/firebase";

const Lists = () => {
  console.log("%cDBを取得する", "font-weight: bold; font-size: 30px");

  db.collection("lists")
    .doc(auth!.currentUser!.uid)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
  return (
    <div>
      <p>{auth!.currentUser!.uid}</p>
    </div>
  );
};
export default Lists;
