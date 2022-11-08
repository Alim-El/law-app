import { Box, Button, Stack, Typography, useTheme } from "@mui/joy";
import { NoSsr, useMediaQuery } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";
import { Article as TArticle } from "types";
import isAuthed from "utils/isAuthed";

interface Props {
  article: TArticle;
}

const Article = ({ article }: Props) => {
  const { title, date, description } = article;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const authed = isAuthed();
  const router = useRouter();

  const handleEditButtonClick = () => {
    const url = {
      pathname: "/edit-article",
      query: {
        articleId: router.query.id,
        title,
        date,
        description,
      },
    };

    router.push(url);
  };

  const handleDeleteButtonClick = () => {};

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

      {authed && (
        <NoSsr>
          <Stack spacing={5} direction="row" sx={{ mb: 5 }}>
            <Button onClick={handleEditButtonClick}>Редактировать</Button>
            <Button color="danger">Удалить</Button>
          </Stack>
        </NoSsr>
      )}
    </Wrapper>
  );
};

Article.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default Article;
