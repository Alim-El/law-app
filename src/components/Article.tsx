import type { Article as TArticle } from "types";

import DocView from "./DocView";
import Wrapper from "./Wrapper";

interface Props {
  article: TArticle;
  previewMode?: boolean;
  path: string;
}

export const Article = (props: Props) => (
  <Wrapper
    height={props.previewMode ? "auto" : "100%"}
    display="flex"
    flexDirection="column"
  >
    <DocView {...props} />
  </Wrapper>
);
