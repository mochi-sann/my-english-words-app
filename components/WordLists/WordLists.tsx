import { Text, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { db, auth } from "~/lib/firebase";

const ListBox = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  let debug: any;

  // console.log("%cDBを取得する", "font-weight: bold; font-size: 30px");
  const user = auth!.currentUser;
  const listsRef = db.collection("lists").doc(user!.uid).collection(user!.uid);

  const allCities = listsRef
    .where("capital", "==", true)
    .get()
    .then((snapshot: any) => {
      // setItems(snapshot);
      // console.log(items);

      if (snapshot.empty) {
        console.log(
          "%cNo matching documents.",
          "font-weight: bold; font-size: 30px"
        );
        // return;
      }
      snapshot.forEach((doc: any) => {
        // setItems((items) => [...items, { id: doc.id, value: doc.data() }]);
        console.log(doc.id, "=>", doc.data());
      });
      setIsLoaded(true);
    })
    .catch((err) => {
      setError(err);
      console.log("Error getting documents", err);
    });

  // const getDoc = listsRef
  //   .get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       console.log("No such document!");
  //     } else {
  //       console.log("Document data:", doc.data());
  //     }
  //   })
  //   .catch((err) => {
  //     console.log("Error getting document", err);
  //   });

  // useEffect(() => {
  //   fetch("https://api.example.com/items")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  if (error) {
    return <div>Error: {error!}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        <Box className="bg-gray-200 p-2 rounded-lg" as="pre">
          {JSON.stringify(items, null, 2)}
        </Box>
        {/* {items.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))} */}
      </ul>
    );
  }
};

// Lists.getInitialProps = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");

//   const user = auth!.currentUser;
//   const listsRef = db.collection("lists").doc(user!.uid).collection(user!.uid);

//   const alllists = listsRef
//     .get()
//     .then((snapshot: any) => {
//       console.log(
//         `${snapshot}`
//         // "font-weight: bold; font-size: 30px; background: #999;"
//       );

//       snapshot.forEach((doc: any) => {
//         console.log(doc.id, "=>", doc.data());
//       });
//     })
//     .catch((err: any) => {
//       console.log("Error getting documents", err);
//     });
//   const json = await res.json();
//   return { stars: json.stargazers_count, alllists };
// };
export default ListBox;
