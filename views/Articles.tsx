import React, { useState } from "react";
import DocItem from "@components/DocItem";
import { Box, Button, CircularProgress } from "@mui/joy";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import useDocs from "data/useDocs";
import MainLayout from "layouts/MainLayout";
import { Article } from "types";

const Articles = ({
  articles,
  total: initialTotal,
}: {
  articles: Article[];
  total: number;
}) => {
  const [counter, setCounter] = useState(15);
  const {
    data: { docs, total },
    isLoading,
  } = useDocs("articles", counter);

  return (
    <Wrapper sx={{ display: "flex", flexDirection: "column", pb: 5 }}>
      <Title>Статьи</Title>

      {isLoading && <CircularProgress sx={{ m: "auto", mt: 10 }} />}

      {!isLoading && (
        <>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: ["center", "center", "flex-start"],
            }}
          >
            {(docs ?? []).map((props) => (
              <DocItem
                sx={{ width: ["none", 400], flex: [1, "none"] }}
                animated={true}
                key={props.id}
                path="articles"
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
        </>
      )}
    </Wrapper>
  );
};

Articles.getLayout = (page: React.ReactElement) => (
  <MainLayout title="Статьи">{page}</MainLayout>
);

export default Articles;
