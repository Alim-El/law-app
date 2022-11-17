import React from "react";
import { Typography } from "@mui/joy";
import { Avatar, Stack } from "@mui/joy";
import { Divider } from "@mui/material";

import Description from "components/Description";
import Title from "components/Title";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";

const SwiperItem = () => (
  <Stack direction="row" spacing={[1, 10]} sx={{ width: "100%" }}>
    <Avatar src="./2.jpg" sx={{ height: 250, width: 250 }} />
    <Stack spacing={2}>
      <Typography level="body4">ОСНОВАТЕЛЬ, УПРАВЛЯЮЩИЙ ПАРТНЕР</Typography>

      <Typography level="body1">Мурат Борисович Штымов</Typography>

      <Stack direction="row" spacing={5}>
        <div>
          <Typography level="body4" textTransform="uppercase">
            e-mail
          </Typography>

          <Typography level="body2">welcome@shtymov.ru</Typography>
        </div>

        <div>
          <Typography level="body4" textTransform="uppercase">
            телефон
          </Typography>

          <Typography level="body2">+7 (495) 147-40-46, доб. 100</Typography>
        </div>
      </Stack>

      <Typography level="body1">
        Опыт работы в провахронительных учреждениях более 20 лет.
        <br />
        <br />
        Подполковник полиции в отставке.
        <br />
        <br />
      </Typography>
    </Stack>
  </Stack>
);

const People = () => {
  return (
    <Wrapper px={[2, 2, 0]}>
      <Title>Команда</Title>
      <Stack
        spacing={5}
        sx={{
          py: 5,
        }}
      >
        <Description>
          Наша команда как единый организм, объединённый общей целью,
          направленный для защиты граждан. Команда делает возможным решение
          задач, которые не под силу одному человеку.
        </Description>

        <Divider />

        <SwiperItem />
      </Stack>
    </Wrapper>
  );
};

People.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default People;
