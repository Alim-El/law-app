import DocView from "components/DocView";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";
import { Article as TArticle } from "types";

interface Props {
  article: TArticle;
  previewMode?: boolean;
}

const Article = ({ article, previewMode = false }: Props) => (
  <Wrapper
    height={previewMode ? "auto" : "100%"}
    display="flex"
    flexDirection="column"
  >
    <DocView article={article} previewMode={previewMode} path={"/cases"} />
  </Wrapper>
);

Article.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default Article;
