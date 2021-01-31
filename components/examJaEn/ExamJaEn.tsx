import React, { useState } from "react";
import {
  Box,
  HStack,
  Text,
  Input,
  Flex,
  Center,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export type HeaderProps = {
  japanese: string;
  English: string;
  ShowAnswer?: boolean;
  EnglishInputDefaultWord?: string;
};
const Header = ({
  japanese,
  English,
  ShowAnswer,
  EnglishInputDefaultWord = "",
}: HeaderProps) => {
  const headerBg = useColorModeValue("#fff", "gray.900");
  const [Englishwoed, setEnglishwoed] = useState(EnglishInputDefaultWord);

  return (
    <Box>
      {Englishwoed}
      <HStack w="100%">
        <Text w="50%">{japanese}</Text>
        <Input
          value={Englishwoed}
          onChange={(e) => {
            setEnglishwoed(e.target.value);
          }}
          bg={
            ShowAnswer
              ? English === Englishwoed
                ? "#34D399"
                : "#EF4444"
              : headerBg
          }
          w="50%"
          type="text"
          name={"EnglishWoeds." + japanese}
        />

        {/* <Text>{index + 1}</Text> */}
        {ShowAnswer ? (
          <>
            <Flex
              rounded="lg"
              w={10}
              h={10}
              bg={useColorModeValue("gray.200", "gray.700")}
            >
              <Center w="100px" bg="">
                {English === Englishwoed ? (
                  <FaCheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <FaTimesCircle className="w-6 h-6 text-red-500" />
                )}
              </Center>
            </Flex>
          </>
        ) : (
          ""
        )}
      </HStack>
      {ShowAnswer ? (
        <>
          <Tag>答え: {English}</Tag>
        </>
      ) : (
        ""
      )}
    </Box>
  );
};
export default Header;
