import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Stack } from "@mui/joy";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import { Article } from "types";
import { getArticles } from "utils/firebase";

import ArticleItem from "./ArticleItem";

const Articles = () => {
  const [data, setData] = useState<{ articles: Article[]; total: number }>({
    articles: [],
    total: 0,
  });
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(false);

  const { articles, total } = data;

  const handeClickLoad = () => {
    setLoading(true);

    if (limit < total) {
      setLimit(limit + 3);
    }
  };

  useEffect(() => {
    getArticles(limit).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [limit]);

  return (
    <Wrapper id="articles" py={20}>
      <Title>Последние статьи</Title>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: 10,
        }}
      >
        {articles.map((props) => (
          <ArticleItem key={props.id} {...props} />
        ))}
      </Box>

      {limit < total && (
        <Button onClick={handeClickLoad} variant="plain">
          {loading ? <CircularProgress /> : "Загрузить еще..."}
        </Button>
      )}
    </Wrapper>
  );
};

export default Articles;
