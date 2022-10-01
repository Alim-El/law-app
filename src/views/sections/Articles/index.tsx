import { Box, Stack } from "@mui/joy";

import Title from "components/Title";

import ArticleItem from "./ArticleItem";

const Articles = () => {
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
        {[
          {
            date: "December 13, 2020",
            title: "12 Things About Web Design Your Boss Wants To Know",
          },
          { date: "December 10, 2020", title: "The History Of Web Design" },
          {
            date: "December 10, 2020",
            title: "How to improve Web Design Process",
          },
        ].map((props) => (
          <ArticleItem key={props.title} {...props} />
        ))}
      </Stack>
    </Box>
  );
};

export default Articles;
