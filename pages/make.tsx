import Layout from "../components/Layout";
// import React, { useState, useEffect } from "react";

// import { useForm } from "react-hook-form";
import { Form } from "react-final-form";

import { Box, Button, Code, Heading } from "@chakra-ui/react";
// import { db } from "~/lib/firebase.ts";

import FromInputs from "~/components/makeForms/japaneseAndEnglish.tsx";

import { TopcoatPlus, TopcoatMinus } from "~/components/svgs/icon.tsx";

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

const MyForm = () => {
  const onSubmit = async (values: any) => {
    // await sleep(300);
    window.alert(JSON.stringify(values, 2, 2));
    console.log(JSON.stringify(values, 2, 2));
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ stooge: "larry", employed: false }}
      render={({ handleSubmit, form, values }) => (
        <form onSubmit={handleSubmit}>
          <FromInputs number={1} />
          <FromInputs number={2} />
          <FromInputs number={3} />
          <FromInputs number={4} />

          <div className="buttons">
            <Button
              m={4}
              type="submit"
              // disabled={submitting || pristine}
            >
              Submit
            </Button>
            <Button
              m={4}
              type="button"
              onClick={form.reset}
              // disabled={submitting || pristine}
            >
              Reset
            </Button>
          </div>
          <Code>{JSON.stringify(values, 2, 2)}</Code>
        </form>
      )}
    />
  );
};
export default makePage;
