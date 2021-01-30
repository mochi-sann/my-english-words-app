import React from "react";
import { Box, SkeletonText } from "@chakra-ui/react";

export interface HeaderProps {}
const Header = () => {
  // const headerBg = useColorModeValue("#fff", "gray.900");

  return (
    <Box padding="6" bg="white">
      <SkeletonText mt="4" spacing="4" />
    </Box>
  );
};
export default Header;
