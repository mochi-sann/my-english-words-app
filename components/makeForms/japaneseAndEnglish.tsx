import React from "react";

import { Input, Tr, Td } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";

type Inputs = {
  ref: any;
  number: number;
};

const Main = ({ ref, number }: Inputs) => {
  return (
    <>
      <Tr>
        <Td px="0" w="25px" textAlign="center">
          {number}
        </Td>
        <Td px="2px">
          <Input
            w="100%"
            h="40px"
            name={"Japanese:" + number}
            placeholder={"日本語:" + number}
            ref={ref}
          />
        </Td>
        <Td px="0" w="2px">
          :
        </Td>
        <Td px="2px">
          <Input
            w="100%"
            h="40px"
            name={"Englsh:" + number}
            placeholder={"Englsh:" + number}
            ref={ref}
          />
        </Td>
      </Tr>
    </>
  );
};

export default Main;
