import React from "react";

import {
  Input,
  Box,
  HStack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
// import { useForm } from "react-hook-form";

type Inputs = {
  ref: any;
  number: number;
};

const Main = ({ ref, number }: Inputs) => {
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
          <InputLeftAddon> {number}</InputLeftAddon>
          <Input
            defaultValue={"Japanese:" + number}
            w="100%"
            h="40px"
            name={"Japanese-" + number}
            placeholder={"日本語:" + number}
            ref={ref}
          />
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
            ref={ref}
          />
        </Box>
      </HStack>
    </>
  );
};

export default Main;
