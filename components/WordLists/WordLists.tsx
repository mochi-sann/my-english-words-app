import { db, auth } from "~/lib/firebase";

const Lists = () => {
  console.log("%cDBを取得する", "font-weight: bold; font-size: 30px");
  const user = auth!.currentUser;

  const listsRef = db.collection("lists").doc(user!.uid).collection(user!.uid);

  listsRef
    .where("capital", "==", true)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log(
          "%cNo matching documents.",
          "font-weight: bold; font-size: 30px"
        );
        return;
      }

      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });

  // console.log();

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
      <p>
        {auth!.currentUser!.uid}
        asdfasdfa
      </p>
    </div>
  );
};
export default Lists;
