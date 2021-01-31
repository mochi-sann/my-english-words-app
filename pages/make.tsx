import Layout from "../components/Layout/Layout";
import React, { useState, useEffect } from "react";

// import { useForm } from "react-hook-form";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
// import axios from "axios";
import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Flex,
  Center,
  Tooltip,
  useColorModeValue,
  IconButton,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

// import { db } from "~/lib/firebase.ts";
import dayjs from "dayjs";

import {
  Wordinput,
  WordBordNameInput,
} from "~/components/makeForms/japaneseAndEnglish";

import { IcomoonFreeCross } from "~/components/svgs/icon";
import { auth } from "~/lib/firebase";

// import { type } from "os";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

const makePage = () => {
  return (
    <Layout title="問題集を作る">
      <Box mt="4">
        <Heading my={4} as="h1">
          問題集を作る
        </Heading>
        <MyForm />
      </Box>
    </Layout>
  );
};

const MyForm = () => {
  const toast = useToast();
  const router = useRouter();
  const url = location.href;
  const hosturl = url.replace(/make\//g, "");

  const onSubmit = async (values: any) => {
    const user = auth!.currentUser;
    // await sleep(300);
    // window.alert(JSON.stringify(values, null, "\t"));
    // Firebaseに送信するところ
    try {
      const postDeta = {
        docName: dayjs().format("YYYY-MM-DD-HH-mm-ss-SSS") + values.title,
        userUid: user!.uid,
        capital: true,
        create_at: dayjs().format("YYYY/MM/DD HH:mm"),
        update_at: dayjs().format("YYYY/MM/DD HH:mm"),
        values: values,
      };
      // const response =
      await fetch(hosturl + "api/pushDeta", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(postDeta), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
      })
        .then((response) => {
          console.log(response.json());

          // response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        });

      // return response.json(); // レスポンスの JSON を解析

      // await db
      //   .collection("lists")
      //   .doc(user!.uid) // userのuidごとに別れて格納されるようにする
      //   .collection(user!.uid) // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime
      //   .doc(dayjs().format("YYYY-MM-DD-HH-mm-ss-SSS") + values.title)
      //   .set({
      //     docName: dayjs().format("YYYY-MM-DD-HH-mm-ss-SSS") + values.title,
      //     userUid: user!.uid,
      //     capital: true,
      //     create_at: dayjs().format("YYYY/MM/DD HH:mm"),
      //     update_at: dayjs().format("YYYY/MM/DD HH:mm"),
      //     values,
      //   });
      // postData();
      // console.log(response);

      // response.json();
      // analytics.logEvent("Create Forms");
      toast({
        description: "送信できました!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      router.push("/"); // 送信が完了したらホームページに戻る

      // useRouter().push("/");
    } catch (error) {
      toast({
        description: "送信できませんでした!",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      console.log(error);
      console.log("firebaseに書き込めませんでした");
    }
    console.log(JSON.stringify(values, null, "\t"));
  };

  const [InputCounts, setInputCounts] = useState(10);

  useEffect(() => {
    // console.log(`InputCounts : ${InputCounts} `);
    if (InputCounts > 100) {
      setInputCounts(100);
    } else if (InputCounts < 1) {
      setInputCounts(1);
    }
  });

  // const { input, meta } = useField("InputCounts");
  // document!.getElementById("addButton")!.click()!;

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ stooge: "larry", employed: false }}
      mutators={{
        ...arrayMutators,
      }}
      render={({
        handleSubmit,
        form: {
          mutators: { push, pop },
        }, // injected from final-form-arrays above
        // pristine,
        // form,
        // submitting,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          {/* <FromInputs number={1} />
          <FromInputs number={2} />
          <FromInputs number={3} />
          <FromInputs number={4} /> */}
          {/* {push("collection", undefined)} */}
          <Box>
            {hosturl}
            <Box w="100%">
              <FormLabel>タイトル</FormLabel>
              <WordBordNameInput name="title" />
              {/* <Field name="company" component="input" /> */}
            </Box>

            <Box>
              {/* 英単語の問題を入れるところ */}
              <FieldArray name="collection">
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <hr className="my-2" />
                      <HStack my={2}>
                        <Flex
                          rounded="lg"
                          w={10}
                          h={10}
                          bg={useColorModeValue("gray.200", "gray.700")}
                        >
                          <Center w="100px" bg="">
                            <Text>{index + 1}</Text>
                          </Center>
                        </Flex>
                        {/* <FromInputs number={index} /> */}
                        <Wordinput name={`${name}.english`} lang="English" />
                        <Wordinput name={`${name}.japanese`} lang="日本語" />
                        <Tooltip label="削除する">
                          <IconButton
                            aria-label="remove-word"
                            onClick={() => fields.remove(index)}
                            style={{ cursor: "pointer" }}
                            icon={<IcomoonFreeCross />}
                          />
                        </Tooltip>
                      </HStack>
                    </div>
                  ))
                }
              </FieldArray>
            </Box>

            {/* 行を追加したり削除するところ */}
            <HStack my={4} spacing="10px">
              <Button
                // ml={0}
                // type="button"
                // m={2}
                onClick={() => push("collection", undefined)}
              >
                行を追加
              </Button>
              {/* {(() => {
                push("collection", undefined);
              })()} */}

              <Button
                // type="button"
                // m={2}
                id="addButton"
                onLoad={() => {
                  for (let i = 0; i < 10; i++) {
                    push("collection", undefined);
                  }
                }}
                onClick={() => {
                  for (let i = 0; i < 10; i++) {
                    push("collection", undefined);
                  }
                }}
              >
                10行追加
              </Button>
              <Button colorScheme="red" onClick={() => pop("collection")}>
                行を削除
              </Button>
            </HStack>
          </Box>

          <div className="buttons">
            <Button
              colorScheme="blue"
              m={2}
              ml={0}
              type="submit"
              disabled={!values.title || false || !values.collection || false}
              // disabled={submitting || pristine}
            >
              送信する
            </Button>
            {/* <Button
              m={2}
              type="button"
              onClick={form.reset}
              // disabled={submitting || pristine}
            >
              リセット
            </Button> */}
          </div>
          {/* <div>
            <Box className="bg-gray-200 p-2 rounded-lg" as="pre">
              {JSON.stringify(values, null, 2)}
            </Box>
            <Box className="bg-gray-200 p-2 rounded-lg my-2" as="pre">
              {JSON.stringify(pristine, null, 2)}
            </Box>
            <Box className="bg-gray-200 p-2 rounded-lg my-2" as="pre">
              {JSON.stringify(form, null, 2)}
            </Box>
            <Box className="bg-gray-200 p-2 rounded-lg my-2" as="pre">
              {JSON.stringify(submitting, null, 2)}
            </Box>
          </div> */}
        </form>
      )}
    />
  );
};
export default makePage;
