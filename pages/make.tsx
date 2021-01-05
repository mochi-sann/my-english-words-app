import Layout from "../components/Layout";
import React from "react";

import { useForm } from "react-hook-form";

import {
  Box,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

type Inputs = {
  example: string;
  exampleRequired: string;
};
const makePage = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box mt="4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Table>
            <Thead>
              <Tr>
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
              <Tr>
                <Td px="2px">
                  <Input
                    w="100%"
                    h="40px"
                    defaultValue="日本語"
                    placeholder="日本語"
                    ref={register}
                  />
                </Td>
                <Td px="0" w="2px">
                  :
                </Td>
                <Td px="2px">
                  <Input
                    w="100%"
                    h="40px"
                    placeholder="Englsh"
                    defaultValue="Japanese"
                    ref={register}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td px="2px">
                  <Input
                    w="100%"
                    h="40px"
                    placeholder="日本語"
                    ref={register}
                  />
                </Td>
                <Td px="0" w="2px">
                  :
                </Td>
                <Td px="2px">
                  <Input
                    w="100%"
                    h="40px"
                    placeholder="Englsh"
                    ref={register}
                  />
                </Td>
              </Tr>
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

          <Input type="submit" />
        </form>
      </Box>
    </Layout>
  );
};

export default makePage;
