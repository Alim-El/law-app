import React, { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/joy";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import useDocs from "data/useDocs";
import MainLayout from "layouts/MainLayout";

import DocItem from "../src/components/DocItem";

const Cases = () => {
  const [counter, setCounter] = useState(15);
  const {
    data: { docs, total },
    isLoading,
  } = useDocs("cases", counter);

  return (
    <Wrapper sx={{ display: "flex", flexDirection: "column", pb: 5 }}>
      <Title>Кейсы</Title>

      {isLoading && <CircularProgress sx={{ m: "auto", mt: 10 }} />}

      {!isLoading && (
        <>
          {" "}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: ["center", "center", "flex-start"],
            }}
          >
            {docs.map((props) => (
              <DocItem
                sx={{ width: ["none", 400], flex: [1, "none"] }}
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
        </>
      )}
    </Wrapper>
  );
};

Cases.getLayout = (page: React.ReactElement) => (
  <MainLayout title="Кейсы">{page}</MainLayout>
);

export default Cases;
