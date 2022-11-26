import "../styles/globals.css";
import colors from "@mui/joy/colors";
import {
  CssVarsProvider,
  extendTheme as extendJoyTheme,
} from "@mui/joy/styles";
import { CssBaseline } from "@mui/material";
import { experimental_extendTheme as extendMuiTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import updateLocale from "dayjs/plugin/updateLocale";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";

import ProgressBar from "components/ProgressBar";
import WithFabButton from "components/WithFabButton";

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

const muiTheme = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using `CssVarsProvider` from Joy UI.
  cssVarPrefix: "joy",
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.blue[500],
        },
        grey: colors.grey,
        error: {
          main: colors.red[500],
        },
        info: {
          main: colors.purple[500],
        },
        success: {
          main: colors.green[500],
        },
        warning: {
          main: colors.yellow[200],
        },
        common: {
          white: "#FFF",
          black: "#09090D",
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: colors.blue[600],
        },
        grey: colors.grey,
        error: {
          main: colors.red[600],
        },
        info: {
          main: colors.purple[600],
        },
        success: {
          main: colors.green[600],
        },
        warning: {
          main: colors.yellow[300],
        },
        common: {
          white: "#FFF",
          black: "#09090D",
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
      },
    },
  },
});

const joyTheme = extendJoyTheme();

// You can use your own `deepmerge` function.
// joyTheme will deeply merge to muiTheme.
const theme = deepmerge(muiTheme, joyTheme);

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="Штымов, штымов, штымов и партенры, адвокаты, юристы, закон, суд"
        />
        <meta name="author" content="Shtymov M. B." />
        <meta
          name="description"
          content="Правозащитники «Штымов и партнеры» — личные помощники, партнеры, которые пройдут с вами сложный путь: от консультирования до завершения судебных этапов, моментально вступают в дело на любом этапе, помогая найти выход из патовых ситуаций."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <CssVarsProvider theme={theme}>
        <ProgressBar />
        <CssBaseline />

        <WithFabButton>
          <SWRConfig>{getLayout(<Component {...pageProps} />)}</SWRConfig>
        </WithFabButton>
      </CssVarsProvider>
    </>
  );
}

export default MyApp;
