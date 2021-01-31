import {
  Box,
  Heading,
  useColorModeValue,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { db, auth } from "~/lib/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import LoadingBox from "~/components/LoadingPeage/LoadingPeage";
function ListBox() {
  const user = auth!.currentUser;
  // const listsRef = db.collection("lists").doc(user!.uid).collection(user!.uid);
  const [value, loading, error] = useCollection(
    db.collection("lists").doc(user!.uid).collection(user!.uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <LoadingBox />}

      <Box>
        {value && (
          <span>
            {/* 問題を並べるところ */}
            <Heading>今まで作った単語集</Heading>
            {value.docs.map((doc: any) => (
              <React.Fragment key={doc.id}>
                <NextLink href={"/examination/" + doc.id}>
                  <Link href={"/examination/" + doc.id}>
                    <Box
                      argtypes={{ onClick: { action: "clicked" } }}
                      // w={widthParcent + "%"}
                      boxShadow="base"
                      border="1px"
                      my="4"
                      p="4"
                      rounded="md"
                      borderColor={useColorModeValue("gray.200", "gray.600")}
                      color={useColorModeValue("#000", "#fff")}
                      bg={useColorModeValue("#fff", "gray.800")}
                      transition="300ms"
                      _hover={{
                        bg: useColorModeValue("gray.100", "gray.900"),
                      }}
                    >
                      <Heading
                        fontSize="2xl"
                        as="h4"
                        pb="2"
                        borderBottom="1px"
                        borderColor={useColorModeValue("gray.300", "gray.600")}
                      >
                        {doc.data().values.title}
                      </Heading>
                      <Text>{doc.data().create_at}</Text>
                      {/* {doc.data().} */}
                      <Box>
                        <EnglishWordSimplelist ListDeta={doc.data().values} />
                      </Box>
                      {/* {JSON.stringify(doc.data(), null, 4)}, */}
                    </Box>
                  </Link>
                </NextLink>
              </React.Fragment>
            ))}
          </span>
        )}
      </Box>

      {/* デバック用 */}
      {/* <Box className="bg-gray-200 p-2 rounded-lg" as="pre">
        {value && (
          <span>
            Collection:{" "}
            {value.docs.map((doc: any) => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data(), null, 4)},{" "}
              </React.Fragment>
            ))}
          </span>
        )}
      </Box> */}
    </div>
  );
}

interface EnglishWordSimplelistProps {
  ListDeta: any;
}
const EnglishWordSimplelist = ({ ListDeta }: EnglishWordSimplelistProps) => {
  return (
    <Box>
      <HStack w="100%" my="2">
        <Text fontWeight="700" w="50%">
          日本語
        </Text>
        <Text fontWeight="700" w="50%">
          英語
        </Text>
      </HStack>
      {ListDeta.collection.map((value: any) => (
        <React.Fragment key={value.id}>
          <HStack w="100%" my="2">
            <Text w="50%">{value.japanese}</Text>
            <Text w="50%">{value.english}</Text>
          </HStack>
        </React.Fragment>
      ))}
    </Box>
  );
};
export default ListBox;
