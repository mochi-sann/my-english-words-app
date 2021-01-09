import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  HStack,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
} from "@chakra-ui/react";
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

  const [InputCounts, setInputCounts] = useState(10);

  useEffect(() => {
    console.log(`InputCounts : ${InputCounts} `);
    if (InputCounts > 100) {
      setInputCounts(100);
    } else if (InputCounts < 1) {
      setInputCounts(1);
    }
  });
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box mt="4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box w="100%">
            <HStack w="100%">
              {/* <Box fontSize="xl" w="20px" className="text-xl" px="2px">
                番号
              </Box> */}
              <Box w="40px"></Box>
              <Box
                fontSize="xl"
                w="50%"
                className="text-xl"
                p="6px"
                py="6px"
                fontWeight={600}
              >
                日本語
              </Box>
              <Box
                fontSize="xl"
                w="50%"
                className="text-xl"
                p="6px"
                py="6px"
                fontWeight={600}
              >
                English
              </Box>
            </HStack>
            <VStack spacing={0}>
              {(() => {
                const items = [];
                for (let i = 1; i <= InputCounts; i++) {
                  items.push(
                    <>
                      <FromInputs ref={register} number={i} />
                    </>
                  );
                }
                return <>{items}</>;
              })()}
              {/* <FromInputs ref={register} number={1} />
              <FromInputs ref={register} number={2} />
              <FromInputs ref={register} number={3} />
              <FromInputs ref={register} number={4} />
              <FromInputs ref={register} number={5} />
              <FromInputs ref={register} number={6} />
              <FromInputs ref={register} number={7} />
              <FromInputs ref={register} number={8} /> */}

              {/* Inputの数を入れるところ */}
              <HStack w="100%" spacing={0}>
                <Box alignItems="center" mx="4" display="flex">
                  数
                </Box>
                <InputGroup w="100%">
                  <NumberInput
                    step={1}
                    defaultValue={10}
                    min={1}
                    max={100}
                    w="100%"
                  >
                    <NumberInputField
                      w="100%"
                      value={InputCounts}
                      onChange={(
                        event: React.FormEvent<HTMLInputElement> | any
                      ) => {
                        if (event.target.value > 100) {
                          event.target.value = 100;
                        } else if (event.target.value < 1) {
                          event.target.value = 1;
                        }
                        setInputCounts(event.target.value);
                      }}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper
                        onClick={() => {
                          setInputCounts(InputCounts + 1);
                        }}
                      />
                      <NumberDecrementStepper
                        onClick={() => {
                          setInputCounts(InputCounts - 1);
                        }}
                      />
                    </NumberInputStepper>
                  </NumberInput>
                </InputGroup>
              </HStack>
              {/* Inputの数を入れるところ終わり */}
            </VStack>
          </Box>
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
