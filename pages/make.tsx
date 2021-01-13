import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";

// import { useForm } from "react-hook-form";
import { Form, useField, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

import {
  Box,
  Button,
  Code,
  Heading,
  NumberInput,
  NumberInputField,
  IconButton,
  Input,
  HStack,
} from "@chakra-ui/react";

// import { db } from "~/lib/firebase.ts";

import FromInputs from "~/components/makeForms/japaneseAndEnglish.tsx";

import { TopcoatPlus, TopcoatMinus } from "~/components/svgs/icon.tsx";
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
type InputCountsProps = { InputCounts: number };
const InputCountsvalue = ({ InputCounts }: InputCountsProps) => {
  const { input, meta } = useField("lang +  + number");

  return (
    <>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        placeholder="Basic usage"
        value={InputCounts}
      />
    </>
  );
};
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
            <div>
              <label>Company</label>
              <Field name="company" component="input" />
            </div>
            <div className="buttons">
              <button
                type="button"
                onClick={() => push("customers", undefined)}
              >
                Add Customer
              </button>
              <button type="button" onClick={() => pop("customers")}>
                Remove Customer
              </button>
            </div>
            <Box>
              {/* 英単語の問題を入れるところ */}
              <FieldArray name="customers">
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <label>Cust. #{index + 1}</label>
                      {/* <FromInputs number={index} /> */}
                      <Wordinput lang="日本語" number={index} />
                      <Field
                        name={`${name}.firstName`}
                        component="input"
                        placeholder="First Name"
                      />
                      <Field
                        name={`${name}.lastName`}
                        component="input"
                        placeholder="Last Name"
                      />
                      <span
                        onClick={() => fields.remove(index)}
                        style={{ cursor: "pointer" }}
                      >
                        ❌
                      </span>
                    </div>
                  ))
                }
              </FieldArray>
            </Box>
          </Box>
          {/* {(() => {
            // 英に日本語の問題集を作るInputを入れるとこ
            const items = [];
            for (let i = 1; i <= InputCounts; i++) {
              items.push(
                <>
                  <FromInputs number={i} />
                </>
              );
            }
            return <>{items}</>;
          })()}

          <HStack>
            <Input placeholder="Basic usage" value={InputCounts} />
            <InputCountsvalue InputCounts={InputCounts} />
            <Button
              leftIcon={<TopcoatPlus />}
              colorScheme="blue"
              m="2"
              onClick={() => setInputCounts(InputCounts + 10)}
            >
              10
            </Button>
            <IconButton
              aria-label="行を追加"
              icon={<TopcoatPlus />}
              colorScheme="blue"
              m="2"
              onClick={() => setInputCounts(InputCounts + 1)}
            />
            <IconButton
              aria-label="行を削除"
              icon={<TopcoatMinus />}
              colorScheme="blue"
              m="2"
              onClick={() => setInputCounts(InputCounts - 1)}
            />
            <Button
              leftIcon={<TopcoatMinus />}
              colorScheme="blue"
              m="2"
              onClick={() => setInputCounts(InputCounts - 10)}
            >
              10
            </Button>
          </HStack>

          <div className="buttons">
            <Button
              m={4}
              type="submit"
              // disabled={submitting || pristine}
            >
              決定
            </Button>
            <Button
              m={4}
              type="button"
              onClick={form.reset}
              // disabled={submitting || pristine}
            >
              リセット
            </Button>
          </div> */}
          <Code>{JSON.stringify(values, 2, 2)}</Code>
        </form>
      )}
    />
  );
};
export default makePage;
type WordinputProps = {
  lang: "日本語" | "English";
  number: number;
};
const Wordinput = ({ lang, number }: WordinputProps) => {
  const { input, meta } = useField(lang + ":" + number);
  return (
    <>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={lang + ":" + number}
        placeholder={lang + ":" + number}
        defaultValue={"lang" + ":" + "number"}
        w="100%"
        h="40px"
        // name={"Japanese-asdfasdfa"}
        // placeholder={"日本語:" + number}
      />
    </>
  );
};
