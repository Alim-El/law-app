import { Box, Button, Stack, Typography, useTheme } from "@mui/joy";
import { NoSsr, useMediaQuery } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";
import { Article as TArticle } from "types";
import deleteArticle from "utils/firebase/deleteArticle";
import isAuthed from "utils/isAuthed";

interface Props {
  article: TArticle;
  previewMode?: boolean;
}

const Article = ({ article, previewMode = false }: Props) => {
  const { title, date, description } = article;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const authed = isAuthed();
  const router = useRouter();
  const { id } = router.query;

  const handleEditButtonClick = () => {
    const url = {
      pathname: "/edit-article",
      query: {
        articleId: id,
      },
    };

    router.push(url);
  };

  const handleDeleteButtonClick = async () => {
    deleteArticle(id as string).then(() => {
      alert("Статья удалена");

      router.push("/");
    });
  };

  return (
    <Wrapper
      height={previewMode ? "auto" : "100%"}
      display="flex"
      flexDirection="column"
    >
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
        style={{
          textAlign: "justify",
          padding: isMobile ? "0 10px" : "0",
          marginBottom: 40,
          overflowWrap: "break-word",
          overflow: "hidden",
        }}
        dangerouslySetInnerHTML={{
          __html: description.replace(/&nbsp;/g, " ") || "",
        }}
      />

      <Typography
        textAlign="right"
        sx={{
          textAlign: "right",
          mt: "auto",
          mb: 5,
          mr: [2, 0],
          fontSize: (theme) => [theme.vars.fontSize.sm, theme.vars.fontSize.md],
        }}
      >
        {dayjs(date).format("MMMM DD, YYYY")}
      </Typography>

      {authed && !previewMode && (
        <NoSsr>
          <Stack spacing={5} direction="row" sx={{ mb: 5, mt: "auto" }}>
            <Button onClick={handleEditButtonClick}>Редактировать</Button>
            <Button color="danger" onClick={handleDeleteButtonClick}>
              Удалить
            </Button>
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
