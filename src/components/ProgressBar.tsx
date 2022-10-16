// material

import { useTheme } from "@mui/joy";
import { GlobalStyles } from "@mui/styled-engine";
import { Router } from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// ----------------------------------------------------------------------

export default function ProgressBar() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        "#nprogress": {
          pointerEvents: "none",
          "& .bar": {
            top: 0,
            left: 0,
            height: 2,
            width: "100%",
            position: "fixed",
            zIndex: 9999,
            backgroundColor: theme.palette.primary[500],
            boxShadow: `0 0 2px ${theme.palette.primary[500]}`,
          },
          "& .peg": {
            right: 0,
            opacity: 1,
            width: 100,
            height: "100%",
            display: "block",
            position: "absolute",
            transform: "rotate(3deg) translate(0px, -4px)",
            boxShadow: `0 0 10px ${theme.palette.primary[500]}, 0 0 5px ${theme.palette.primary[500]}`,
          },
        },
      }}
    />
  );
}
