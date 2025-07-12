import { Article } from "@components/Article";
import { Box, CircularProgress } from "@mui/joy";
import { useRouter } from "next/router";
import useSWR from "swr";
import type { Article as TArticle } from "types";

import MainLayout from "layouts/MainLayout";
import getArticleById from "utils/firebase/getArticleById";

function ArticlePage() {
  const { query } = useRouter();
  const { data, isLoading } = useSWR<TArticle>(
    query.id,
    async () => getArticleById("articles", query.id as string),
    {
      fallbackData: { description: "" } as TArticle,
    }
  );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={1}
      >
        <CircularProgress sx={{ m: "auto" }} />
      </Box>
    );
  }

  return <Article previewMode={false} article={data!} path="/articles" />;
}

ArticlePage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default ArticlePage;
