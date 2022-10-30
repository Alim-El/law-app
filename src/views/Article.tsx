import { Box, Typography } from "@mui/joy";
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

  return (
    <Wrapper>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Title pb={5} fontSize={30}>
          {title}
        </Title>
      </Box>

      <div
        style={{ textAlign: "justify" }}
        dangerouslySetInnerHTML={{ __html: description || "" }}
      />

      <Typography textAlign="right" sx={{ textAlign: "right", my: 5 }}>
        {dayjs(date).format("MMMM DD, YYYY")}
      </Typography>
    </Wrapper>
  );
};

Article.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default Article;
