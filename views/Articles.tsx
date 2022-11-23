import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/joy";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";
import { Article } from "types";
import { getArticles } from "utils/firebase";

import ArticleItem from "./Home/sections/Articles/ArticleItem";

const Articles = ({
  articles: data,
  total: initialTotal,
}: {
  articles: Article[];
  total: number;
}) => {
  const [{ articles, total }, setArticles] = useState<{
    articles: Article[];
    total: number;
  }>({ articles: data || [], total: initialTotal || 0 });
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    getArticles(counter).then((data) => setArticles(data));
  }, [counter]);

  return (
    <Wrapper sx={{ display: "flex", flexDirection: "column", pb: 5 }}>
      <Title>Статьи</Title>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {articles.map((props) => (
          <ArticleItem
            sx={{ width: 400, flex: "none" }}
            animated={true}
            key={props.id}
            {...props}
          />
        ))}
      </Box>

      {total > counter && (
        <Button
          sx={{ alignSelf: "center", mt: 5 }}
          onClick={() => setCounter(counter + 15)}
          variant="outlined"
        >
          Загрузить еще...
        </Button>
      )}
    </Wrapper>
  );
};

Articles.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default Articles;
