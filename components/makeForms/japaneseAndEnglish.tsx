import React from "react";

import {
  Input,
  Box,
  HStack,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@chakra-ui/react";
import { Field, useField } from "react-final-form";
// import { useForm } from "react-hook-form";

type Inputs = {
  number: number;
};

const InputControl = ({ name, label, number }: any) => {
  const { input, meta } = useField(name);
  return (
    <>
      {/* <FormLabel htmlFor={name}>{label}</FormLabel> */}
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={label}
        defaultValue={"Japanese:" + number}
        w="100%"
        h="40px"
        // name={"Japanese-asdfasdfa"}
        // placeholder={"日本語:" + number}
      />
      {/* <Error name={name} /> */}
    </>
  );
};

// const Error = ({ name }) => {
//   const {
//     meta: { error },
//   } = useField(name, { subscription: { error: true } });
//   return <FormErrorMessage>{error}</FormErrorMessage>;
// };
const Main = ({ number }: Inputs) => {
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
        {/* <Box px="0" w="20px" textAlign="center">
          {number}
        </Box> */}
        <InputGroup w="50%">
          <InputLeftAddon mr="2">{number}</InputLeftAddon>
          {/* inputのところ */}
          <InputControl name="222" label={"日本語:" + number} number={number} />

          {/* <Input
            defaultValue={"Japanese:" + number}
            w="100%"
            h="40px"
            name={"Japanese-" + number}
            placeholder={"日本語:" + number}
          /> */}
        </InputGroup>
        <Box px="0px" ml="0" w="50%">
          <Input
            defaultValue={"Englsh:" + number}
            w="100%"
            h="40px"
            // px="0px"
            ml="0"
            name={"Englsh-" + number}
            placeholder={"Englsh:" + number}
          />
        </Box>
      </HStack>
      {/* <InputControl name="lastName" label="Last Name" /> */}

      <div>
        <label>
          <Field
            name={"Englsh-" + number}
            component="input"
            type="text"
            value="larry"
          />{" "}
          Larry
        </label>
        <label>
          <Field
            name={"Englsh-" + number + 1}
            component="input"
            type="text"
            value="moe"
          />{" "}
          Moe
        </label>
        <label>
          <Field
            name={"Englsh-" + number + 2}
            component="input"
            type="text"
            value="curly"
          />{" "}
          Curly
        </label>
      </div>
    </>
  );
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
        defaultValue={lang + ":" + number}
        w="100%"
        h="40px"
        // name={"Japanese-asdfasdfa"}
        // placeholder={"日本語:" + number}
      />
    </>
  );
};

const Test = ({ number }: Inputs) => {
  const { meta } = useField("135234");

  return (
    <FormControl
      isInvalid={meta.error && meta.touched}
      id={": ad" + number}
      // id="test"
      as="fieldset"
      name="aaaaaaaaa"
    >
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
    </FormControl>
  );
};
export default Test;
