import "../../styles/globals.css";
import { CssVarsProvider } from "@mui/joy";
import { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CssVarsProvider>{getLayout(<Component {...pageProps} />)}</CssVarsProvider>
  );
}

export default MyApp;
