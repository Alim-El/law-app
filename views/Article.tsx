import { Box, Typography, useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import dayjs from "dayjs";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";
import { Article as TArticle } from "types";

interface Props {
  article: TArticle;
}

const Article = ({ article }: Props) => {
  const { title, date, description } = article;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Wrapper>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Title
          pb={5}
          sx={{
            fontSize: (theme) => [
              theme.vars.fontSize.xl,
              theme.vars.fontSize.xl3,
              theme.vars.fontSize.xl4,
            ],
            px: [1.25, 0],
            textAlign: "left",
          }}
        >
          {title}
        </Title>
      </Box>

      <div
        style={{ textAlign: "justify", padding: isMobile ? "0 10px" : "none" }}
        dangerouslySetInnerHTML={{ __html: description || "" }}
      />

      <Typography
        textAlign="right"
        sx={{
          textAlign: "right",
          my: 5,
          mr: [2, 0],
          fontSize: (theme) => [theme.vars.fontSize.sm, theme.vars.fontSize.md],
        }}
      >
        {dayjs(date).format("MMMM DD, YYYY")}
      </Typography>
    </Wrapper>
  );
};

Article.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default Article;
