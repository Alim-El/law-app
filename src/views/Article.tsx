import { Box, Typography } from "@mui/joy";
import dayjs from "dayjs";

import Title from "components/Title";
import MainLayout from "layouts/MainLayout";
import { Article as TArticle } from "types";

interface Props {
  article: TArticle;
}

const Article = ({ article }: Props) => {
  const { title, date, description } = article;

  return (
    <Box sx={{ px: 10.625 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Title pb={5}>{title}</Title>

        <Typography>{dayjs(date).format("MMMM DD, YYYY")}</Typography>
      </Box>

      <div
        style={{ textAlign: "justify" }}
        dangerouslySetInnerHTML={{ __html: description || "" }}
      />
    </Box>
  );
};

Article.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default Article;