import { Box } from "@mui/joy";
import Head from "next/head";

import Footer from "components/Footer";
import Header from "components/Header";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title = 'МO КА "Закон и человек"' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header />

        <Box sx={{ pt: 13.5, flex: 1 }}>{children}</Box>

        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
