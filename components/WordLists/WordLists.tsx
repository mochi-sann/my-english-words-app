import { auth } from "~/lib/firebase";

const Lists = () => {
  console.log("%cDBを取得する", "font-weight: bold; font-size: 30px");

  // const listsRef = db.collection("lists");
  // const alllists = listsRef
  //   .get()
  //   .then((snapshot) => {
  //     console.log(
  //       `${snapshot}`
  //       // "font-weight: bold; font-size: 30px; background: #999;"
  //     );

  //     snapshot.forEach((doc) => {
  //       console.log(doc.id, "=>", doc.data());
  //     });
  //   })
  //   .catch((err) => {
  //     console.log("Error getting documents", err);
  //   });

  return (
    <div>
      <p>{auth!.currentUser!.uid}</p>
    </div>
  );
};
export default Lists;
