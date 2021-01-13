import React from "react";

import { Input, Box, HStack } from "@chakra-ui/react";
import { useField } from "react-final-form";
// import { useForm } from "react-hook-form";

type Inputs = {
  number: number;
};

type WordinputProps = {
  lang: "日本語" | "English";
  name: string;
  number: number;
};

export const Wordinput = ({ lang, number, name }: WordinputProps) => {
  const { input, meta } = useField(name);
  return (
    <>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={lang}
        defaultValue={"lang" + ":" + "number"}
        w="100%"
        h="40px"

        // name={"Japanese-asdfasdfa"}
        // placeholder={"日本語:" + number}
      />
    </>
  );
};
type WordBordNameInputProps = {
  name: string;
};

export const WordBordNameInput = ({ name }: WordBordNameInputProps) => {
  const { input, meta } = useField(name);
  return (
    <>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={"タイトルを入れてください"}
        // value="無題"
        defaultValue="無題"
        w="100%"
        h="40px"
        // name={"Japanese-asdfasdfa"}
        // placeholder={"日本語:" + number}
      />
    </>
  );
};

const Test = ({ number }: Inputs) => {
  return (
    <>
      <HStack
        w="100%"
        pt="2"
        pb="2"
        marginTop="0px"
        borderTop="1px"
        borderTopColor="gray.200"
      >
        <Box>{number}</Box>
        <Wordinput name="a" lang="日本語" number={number} />
        <Wordinput name="a" lang="English" number={number} />
      </HStack>
      {/* <Wordinput lang="English" number={number} /> */}
    </>
  );
};
export default Test;
