import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/joy";

import Title from "components/Title";
import { Article } from "types";
import { getArticles } from "utils/firebase";

import ArticleItem from "./ArticleItem";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data));
  }, []);

  return (
    <Box component="section" id="articles" px={10.625} py={20}>
      <Title>Последние статьи</Title>

      <Stack
        spacing={5}
        direction="row"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {articles.map((props) => (
          <ArticleItem key={props.id} {...props} />
        ))}
      </Stack>
    </Box>
  );
};

export default Articles;
