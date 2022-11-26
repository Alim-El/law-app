import React, { useState } from "react";
import { Box, Button } from "@mui/joy";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import useDocs from "data/useDocs";
import MainLayout from "layouts/MainLayout";
import { Article } from "types";

import DocItem from "../src/components/DocItem";

const Cases = ({
  articles,
  total: initialTotal,
}: {
  articles: Article[];
  total: number;
}) => {
  const [counter, setCounter] = useState(15);
  const {
    data: { docs, total },
  } = useDocs("cases", counter, { docs: articles, total: initialTotal });

  return (
    <Wrapper sx={{ display: "flex", flexDirection: "column", pb: 5 }}>
      <Title>Кейсы</Title>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {docs.map((props) => (
          <DocItem
            sx={{ width: [300, 400], flex: "none" }}
            animated={true}
            key={props.id}
            path="cases"
            {...props}
          />
        ))}
      </Box>

      {total > counter && (
        <Button
          sx={{ alignSelf: "center", mt: 5 }}
          onClick={() => setCounter(counter + 1)}
          variant="outlined"
        >
          Загрузить еще...
        </Button>
      )}
    </Wrapper>
  );
};

Cases.getLayout = (page: React.ReactElement) => (
  <MainLayout title="Кейсы">{page}</MainLayout>
);

export default Cases;
