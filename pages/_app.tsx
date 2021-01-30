import "../styles/global.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";
import AuthContext from "~/lib/AuthContext";
import authReducer from "~/lib/authReducer.ts";
import React, { useReducer, useEffect } from "react";
import { listenAuthState, config as FirebaseCongig } from "~/lib/firebase";

const fuego = new Fuego(FirebaseCongig);

const styles = {
  global: (props: AppProps) => ({
    body: {
      color: mode("gray.800", "#f8f8f2")(props),
      bg: mode("white", "#282a36")(props),
    },
  }),
};

const components = {
  Link: {
    // setup light/dark mode component defaults
    baseStyle: (props: AppProps) => ({
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
// export function reportWebVitals(metric: any) {
//   console.log(metric);
// }

const theme = extendTheme({ colors, components, styles });

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  );
  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <AuthContext.Provider value={state}>
        <FuegoProvider fuego={fuego}>
          <Component {...pageProps} />
        </FuegoProvider>
      </AuthContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
