import { getArticles } from "utils/firebase";

export { default } from "../../views/Cases";

export const getServerSideProps = async () => {
  const data = await getArticles(15, "cases");

  return {
    props: {
      ...data,
    },
  };
};
