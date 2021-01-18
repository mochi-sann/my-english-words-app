import { Text } from "@chakra-ui/react";

import { db, auth } from "~/lib/firebase";

const ListBox = () => {
  return (
    <div>
      あかさたな
      {(() => {
        console.log("%cDBを取得する", "font-weight: bold; font-size: 30px");
        const user = auth!.currentUser;
        const listsRef = db
          .collection("lists")
          .doc(user!.uid)
          .collection(user!.uid);

        let WordLists;
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
              WordLists.push(
                <>
                  <Text>{doc.id}</Text>
                  {/* <Text>{JSON.stringify(doc.data())}</Text> */}
                </>
              );
              console.log(doc.id, "=>", doc.data());
            });
          })
          .catch((err) => {
            console.log("Error getting documents", err);
          });
        return <>{WordLists}</>;
      })()}
    </div>
  );
};

const Lists = () => {
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
        <ListBox />
      </p>
    </div>
  );
};
export default Lists;
