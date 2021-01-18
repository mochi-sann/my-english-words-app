// import "../styles/global.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "../styles/global.css";

import React from "react";
import { addDecorator } from "@storybook/react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  DraculaBackground: "#282a36",
  DraculaCurrent_Line: "#44475a",
  DraculaForeground: "#f8f8f2",
  DraculaComment: "#6272a4",
  DraculaCyan: "#8be9fd",
  DraculaGreen: "#50fa7b",
  DraculaOrange: "#ffb86c",
  DraculaPink: "#ff79c6",
  DraculaPurple: "#bd93f9",
  DraculaRed: "#ff5555",
  DraculaYellow: "#f1fa8c",

  testRed: "#ff0000",
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors, components, styles });

addDecorator((storyFn) => (
  <ChakraProvider theme={theme}>{storyFn()}</ChakraProvider>
));

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// };
