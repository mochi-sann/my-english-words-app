import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

// setup light/dark mode global defaults

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx: any) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
