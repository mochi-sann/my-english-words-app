import React, { ReactNode } from "react";
import Head from "next/head";
type HeadsDetaPropsType = {
  children?: ReactNode;
  title?: string;
};

const HeadsDeta = ({ children, title }: HeadsDetaPropsType) => {
  return (
    <Head>
      <title>{title} | 英単語アプリ</title>
      <meta charSet="utf-8" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* For new browsers - multisize ico  */}
      <link
        rel="icon"
        type="image/x-icon"
        sizes="16x16 32x32"
        href="favicon.ico"
      />
      {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="icons/favicon-152-precomposed.png"
      />
      {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="icons/favicon-144-precomposed.png"
      />
      {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="icons/favicon-120-precomposed.png"
      />
      {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="icons/favicon-114-precomposed.png"
      />
      {/* For iPhone 6+ */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="icons/favicon-180-precomposed.png"
      />
      {/* For first- and second-generation iPad: */}
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="icons/favicon-72-precomposed.png"
      />
      {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
      <link rel="apple-touch-icon" sizes="57x57" href="icons/favicon-57.png" />
      {/* For Old Chrome */}
      <link rel="icon" sizes="32x32" href="icons/favicon-32.png" />
      {/* For IE10 Metro */}
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      {/* <meta name="msapplication-TileImage" content="icons/favicon-144.png" /> */}
      <meta name="theme-color" content="#ffffff" />
      {/* Chrome for Android */}
      <link rel="manifest" href="icons/manifest.json" />
      <link rel="icon" sizes="192x192" href="icons/favicon-192.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://yourdomain.com" />
      <meta name="twitter:title" content="PWA App" />
      <meta name="twitter:description" content="Best PWA App in the world" />
      <meta
        name="twitter:image"
        content="https://yourdomain.com/static/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@DavidWShadow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PWA App" />
      <meta property="og:description" content="Best PWA App in the world" />
      <meta property="og:site_name" content="PWA App" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta
        property="og:image"
        content="https://yourdomain.com/static/icons/apple-touch-icon.png"
      />

      {children}
    </Head>
  );
};
export default HeadsDeta;
