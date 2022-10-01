import Footer from "components/Footer";
import Header from "components/Header";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: 108 }}>{children}</div>

      <Footer />
    </>
  );
};

export default MainLayout;
