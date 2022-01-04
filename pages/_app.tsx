import React from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";

/**
 *
 * @param {JSX.Element} Component The main component.
 * @param {React.ComponentProps} pageProps The page props.
 * @return {JSX.Element} Main app component.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
