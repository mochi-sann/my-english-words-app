import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";

// import { useForm } from "react-hook-form";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

import {
  Box,
  Code,
  Heading,
  Text,
  HStack,
  Button,
  Flex,
  Center,
  Tooltip,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

// import { db } from "~/lib/firebase.ts";

import {
  Wordinput,
  WordBordNameInput,
} from "~/components/makeForms/japaneseAndEnglish.tsx";

import { IcomoonFreeCross } from "~/components/svgs/icon.tsx";
// import { type } from "os";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

const makePage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box mt="4">
        <Heading m={4} as="h2">
          英単語を作る
        </Heading>
        <MyForm />
      </Box>
    </Layout>
  );
};
// type InputCountsProps = { InputCounts: number };
// const InputCountsvalue = ({ InputCounts }: InputCountsProps) => {
//   const { input, meta } = useField("lang +  + number");

//   return (
//     <>
//       <Input
//         {...input}
//         isInvalid={meta.error && meta.touched}
//         placeholder="Basic usage"
//         value={InputCounts}
//       />
//     </>
//   );
// };
const MyForm = () => {
  const onSubmit = async (values: any) => {
    // await sleep(300);
    window.alert(JSON.stringify(values, 2, 2));
    console.log(JSON.stringify(values, 2, 2));
  };

  const [InputCounts, setInputCounts] = useState(10);

  useEffect(() => {
    console.log(`InputCounts : ${InputCounts} `);
    if (InputCounts > 100) {
      setInputCounts(100);
    } else if (InputCounts < 1) {
      setInputCounts(1);
    }
  });

  // const { input, meta } = useField("InputCounts");

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
        pristine,
        form,
        submitting,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          {/* <FromInputs number={1} />
          <FromInputs number={2} />
          <FromInputs number={3} />
          <FromInputs number={4} /> */}

          <Box>
            <HStack w="100%">
              <Text w={20} textAlign="center">
                タイトル
              </Text>
              <WordBordNameInput name="title" />
              {/* <Field name="company" component="input" /> */}
            </HStack>

            <HStack my={4} spacing="10px">
              <Button
                // ml={0}
                // type="button"
                // m={2}
                onClick={() => push("customers", undefined)}
              >
                行を追加
              </Button>
              <Button
                // type="button"
                // m={2}
                onClick={() => {
                  for (let i = 0; i < 10; i++) {
                    push("customers", undefined);
                  }
                }}
              >
                10行追加
              </Button>
              <Button colorScheme="red" onClick={() => pop("customers")}>
                行を削除
              </Button>
            </HStack>

            <Box>
              {/* 英単語の問題を入れるところ */}
              <FieldArray name="customers">
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
                        <Wordinput
                          name={`${name}.japanese`}
                          lang="日本語"
                          number={23}
                        />
                        <Wordinput
                          name={`${name}.english`}
                          lang="English"
                          number={23}
                        />
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
          </Box>

          <div className="buttons">
            <Button
              m={2}
              ml={0}
              type="submit"
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
          <Code>{JSON.stringify(values, 2, 2)}</Code>
        </form>
      )}
    />
  );
};
export default makePage;
