import { Text, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { db, auth } from "~/lib/firebase";

// const ListBox = async () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   const user = auth!.currentUser;
//   const listsRef = db.collection("lists").doc(user!.uid).collection(user!.uid);

//   const allCities: any = await listsRef
//     .where("capital", "==", true)
//     .get()
//     .then((snapshot: any) => {
//       // setItems(snapshot);
//       // console.log(items);

//       if (snapshot.empty) {
//         console.log(
//           "%cNo matching documents.",
//           "font-weight: bold; font-size: 30px"
//         );
//         // return;
//       }
//       // snapshot.forEach((doc: any) => {
//       //   // setItems((items) => [...items, { id: doc.id, value: doc.data() }]);
//       //   console.log(doc.id, "=>", doc.data());
//       // });

//       // setIsLoaded(true);
//     })
//     .catch((err) => {
//       // setError(err);
//       console.log("Error getting documents", err);
//     });

//   allCities.forEach((doc: any) => {
//     console.log(doc.id, "=>", doc.data());
//   });
//   // console.log("%cDBを取得する", "font-weight: bold; font-size: 30px");

//   // const getDoc = listsRef
//   //   .get()
//   //   .then((doc) => {
//   //     if (doc.exists) {
//   //       console.log("No such document!");
//   //     } else {
//   //       console.log("Document data:", doc.data());
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     console.log("Error getting document", err);
//   //   });

//   // useEffect(() => {
//   //   fetch("https://api.example.com/items")
//   //     .then((res) => res.json())
//   //     .then(
//   //       (result) => {
//   //         setIsLoaded(true);
//   //         setItems(result);
//   //       },
//   //       // Note: it's important to handle errors here
//   //       // instead of a catch() block so that we don't swallow
//   //       // exceptions from actual bugs in components.
//   //       (error) => {
//   //         setIsLoaded(true);
//   //         setError(error);
//   //       }
//   //     );
//   // }, []);

//   // if (error) {
//   //   return <div>Error: {error!}</div>;
//   // } else if (!isLoaded) {
//   //   return <div>Loading...</div>;
//   // } else {
//   //   return (
//   //     <ul>
//   //       <Box className="bg-gray-200 p-2 rounded-lg" as="pre">
//   //         {/* {JSON.stringify(items, null, 2)} */}
//   //       </Box>
//   //       {/* {items.map((item: any) => (
//   //         <li key={item.id}>{item.title}</li>
//   //       ))} */}
//   //     </ul>
//   //   );
//   // }
//   return (
//     <div>
//       <p>わーい</p>
//     </div>
//   );
// };
function ListBox() {
  const user = auth!.currentUser;
  const listsRef = db.collection("lists").doc(user!.uid).collection(user!.uid);
  // const sample = async () => {
  //   const snapshot = await listsRef.get();
  //   return snapshot;
  // };
  // async function sample() {}
  const [items, setItems] = useState([]);
  const deta = [];
  async function test() {
    const snapshot = await listsRef.get().then(() => {});
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    // console.log(snapshot.docs);

    snapshot.forEach((doc) => {
      // setItems((prevItems) => [
      //   ...prevItems,
      //   {
      //     id: prevItems.length,
      //     value: doc.data(),
      //   },
      // ]);
      console.log(doc.id, "=>", doc.data());
      deta.push(doc.data());
    });
    // setItems(deta);
    // setItems(deta);
  }
  test();
  useEffect(() => {
    console.log(
      "更新されましたああああああああああああああああああああああああああああああああ"
    );
  });
  return (
    <div>
      <Box className="bg-gray-200 p-2 rounded-lg" as="pre">
        {JSON.stringify(items, null, 2)}
      </Box>
      <p>テキストテキスト</p>
    </div>
  );
}

export default ListBox;
