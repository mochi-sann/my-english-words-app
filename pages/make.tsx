import Layout from "../components/Layout";
import React from "react";

import { useForm } from "react-hook-form";

import { Box, Table, Thead, Tbody, Tr, Th, Button } from "@chakra-ui/react";
// import { db } from "~/lib/firebase.ts";

import FromInputs from "~/components/makeForms/japaneseAndEnglish.tsx";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const makePage = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  const onSubmit = (data: object) => {
    console.log(data);
    // db.collection("words").doc().set(data);
  };

  console.log(watch("example"));
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box mt="4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Table>
            <Thead>
              <Tr>
                <Th fontSize="xl" className="text-xl" px="2px">
                  番号
                </Th>
                <Th fontSize="xl" className="text-xl" px="2px">
                  日本語
                </Th>
                <Th fontSize="xl" px="0" className="text-xl" w="2px">
                  :
                </Th>
                <Th fontSize="xl" className="text-xl" px="2px">
                  English
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <FromInputs ref={register} number={1} />
              <FromInputs ref={register} number={2} />
              <FromInputs ref={register} number={3} />
              <FromInputs ref={register} number={4} />
              <FromInputs ref={register} number={5} />
              <FromInputs ref={register} number={6} />
              <FromInputs ref={register} number={7} />
              <FromInputs ref={register} number={8} />
            </Tbody>
          </Table>
          <Button
            w="100%"
            mb="8"
            bg="blue.300"
            _hover={{
              background: "blue.200",
            }}
            _active={{ background: "blue.200" }}
          >
            行を追加
          </Button>
          {errors.exampleRequired && <span>This field is required</span>}

          <Button w="100%" bg="red.500" type="submit">
            送信
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default makePage;
