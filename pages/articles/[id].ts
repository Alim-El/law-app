// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";

import getArticleById from "utils/firebase/getArticleById";

export { default } from "../views/Article";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const articleId = query.id;
  const article = await getArticleById(articleId as string);

  return {
    props: {
      article,
    },
  };
};
