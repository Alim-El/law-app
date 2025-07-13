import { useLayoutEffect } from "react";
import { useRouter } from "next/router";

import MainLayout from "layouts/MainLayout";

import AreasSection from "./sections/Areas";
import Articles from "./sections/Articles";
import Consultation from "./sections/Consultation";
import MainSection from "./sections/Main";
import Service from "./sections/Service";
import Social from "./sections/Social";

const Home = () => {
  const router = useRouter();
  const { pathname } = router;

  useLayoutEffect(() => {
    console.log(pathname, window.location?.pathname);
  }, [pathname]);

  return (
    <>
      <MainSection />

      <AreasSection />

      <Service />

      <Articles />

      <Consultation />

      <Social />
    </>
  );
};

Home.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
