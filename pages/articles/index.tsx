import { getArticles } from "utils/firebase";

export { default } from "../../views/Articles";

export const getServerSideProps = async () => {
  const data = await getArticles(15);

  return {
    props: {
      ...data,
    },
  };
};
