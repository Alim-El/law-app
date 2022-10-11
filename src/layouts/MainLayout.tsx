import { Box } from "@mui/joy";

import Footer from "components/Footer";
import Header from "components/Header";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />

      <div style={{ paddingTop: 108, flex: 1 }}>{children}</div>

      <Footer />
    </Box>
  );
};

export default MainLayout;
