// import "../styles/global.css";

import "../styles/global.css";

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// };
import {
  ChakraProvider,
  extendTheme,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { withPerformance } from "storybook-addon-performance";
import { mode } from "@chakra-ui/theme-tools";

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
};

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <Flex justify="flex-end" position="sticky" top="0" left="0" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        // variant="ghost"
        color="current"
        colorScheme="gray"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "#f8f8f2")(props),
      bg: mode("white", "#282a36")(props),
    },
  }),
};

const components = {
  Link: {
    // setup light/dark mode component defaults
    baseStyle: (props) => ({
      color: mode("blue.400", "#8be9fd")(props),
    }),
  },
};
const theme = extendTheme({ components, styles });

const withChakra = (StoryFn, context) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();
  return (
    <ChakraProvider theme={(extendTheme({ direction: dir }), theme)}>
      <div dir={dir} id="story-wrapper" style={{ minHeight: "100vh" }}>
        <ColorModeToggleBar />
        <StoryFn />
      </div>
    </ChakraProvider>
  );
};

export const decorators = [withChakra, withPerformance];
