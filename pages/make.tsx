import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  HStack,
  VStack,
  NumberInput,
  InputGroup,
  IconButton,
  useNumberInput,
  Input,
  InputLeftAddon,
} from "@chakra-ui/react";
// import { db } from "~/lib/firebase.ts";

import FromInputs from "~/components/makeForms/japaneseAndEnglish.tsx";

import { TopcoatPlus, TopcoatMinus } from "~/components/svgs/icon.tsx";

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

  // 行数を管理するところ
  // https://chakra-ui.com/docs/form/number-input#create-a-mobile-spinner
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 10,
    min: 5,
    max: 100,
    precision: 0,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

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
              {/* {(() => {
                const items = [];
                for (let i = 1; i <= InputCounts; i++) {
                  items.push(
                    <>
                      <FromInputs ref={register} number={i} />
                    </>
                  );
                }
                return <>{items}</>;
              })()} */}
              <FromInputs ref={register} number={1} />
              <FromInputs ref={register} number={2} />
              <FromInputs ref={register} number={3} />
              <FromInputs ref={register} number={4} />
              <FromInputs ref={register} number={5} />
              <FromInputs ref={register} number={6} />
              <FromInputs ref={register} number={7} />
              <FromInputs ref={register} number={8} />

              <div>
                <HStack
                  w="100%"
                  pt="2"
                  pb="2"
                  marginTop="0px"
                  borderTop="1px"
                  borderTopColor="gray.200"
                >
                  {/* <Box px="0" w="20px" textAlign="center">
          {number}
        </Box> */}
                  <InputGroup w="50%">
                    <InputLeftAddon> {"10"}</InputLeftAddon>
                    <Input
                      defaultValue={"Japanese:" + "10"}
                      w="100%"
                      h="40px"
                      name={"Japanese-" + "10"}
                      placeholder={"日本語:" + "10"}
                      ref={register}
                    />
                  </InputGroup>
                  <Box px="0px" ml="0" w="50%">
                    <Input
                      defaultValue={"Englsh:" + "10"}
                      w="100%"
                      h="40px"
                      // px="0px"
                      ml="0"
                      name={"Englsh-" + "10"}
                      placeholder={"Engls:" + "10"}
                      ref={register}
                    />
                  </Box>
                </HStack>
              </div>

              {/* Inputの数を入れるところ */}
              <HStack w="100%" spacing={2}>
                <Box alignItems="center" mx="4" display="flex">
                  数
                </Box>
                <InputGroup w="100%">
                  <NumberInput
                    // step={1}
                    // defaultValue={10}
                    // min={1}
                    // max={100}
                    w="100%"
                  >
                    <Input
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
                      ref={register}
                      name="test"
                      {...input}
                    />
                  </NumberInput>
                </InputGroup>
                <IconButton
                  aria-label="行を追加"
                  icon={<TopcoatPlus />}
                  onClick={() => setInputCounts(InputCounts + 1)}
                  {...inc}
                />
                <IconButton
                  aria-label="行を削除"
                  icon={<TopcoatMinus />}
                  onClick={() => setInputCounts(InputCounts - 1)}
                  {...dec}
                />
              </HStack>

              {/* Inputの数を入れるところ終わり */}
            </VStack>
          </Box>
          {/* <Button
            w="100%"
            mb="8"
            bg="blue.300"
            _hover={{
              background: "blue.200",
            }}
            _active={{ background: "blue.200" }}
          >
            行を追加
          </Button> */}
          {errors.exampleRequired && <span>This field is required</span>}
          <Button w="100%" bg="red.500" type="submit" mt={2}>
            送信
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default makePage;
