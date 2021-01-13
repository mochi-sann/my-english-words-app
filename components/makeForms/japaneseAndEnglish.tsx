import React from "react";

import { Input, Box, HStack, FormControl } from "@chakra-ui/react";
import { useField } from "react-final-form";
// import { useForm } from "react-hook-form";

type Inputs = {
  number: number;
};

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
        <Wordinput lang="日本語" number={number} />
        <Wordinput lang="English" number={number} />
      </HStack>
      {/* <Wordinput lang="English" number={number} /> */}
    </>
  );
};
export default Test;
