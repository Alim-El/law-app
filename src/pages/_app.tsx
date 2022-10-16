import "../../styles/globals.css";
import { CssVarsProvider } from "@mui/joy";
import { GlobalStyles } from "@mui/styled-engine";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import updateLocale from "dayjs/plugin/updateLocale";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

import ProgressBar from "components/ProgressBar";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

dayjs.extend(updateLocale);
dayjs.updateLocale("ru", {
  months:
    "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split(
      "_"
    ),
});

dayjs.locale(ru);

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, scale=1" />
      </Head>

      <CssVarsProvider>
        <ProgressBar />

        {getLayout(<Component {...pageProps} />)}
      </CssVarsProvider>
    </>
  );
}

export default MyApp;
