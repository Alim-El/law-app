import React from "react";
import { Box, Typography } from "@mui/joy";
import { Avatar, Stack } from "@mui/joy";
import { Divider } from "@mui/material";

import Description from "components/Description";
import Title from "components/Title";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";

const people = [
  {
    email: "welcome@shtymov.ru",
    phone: "+7 (495) 147-40-46, доб. 01",
    fullName: "Мурат Борисович Штымов",
    position: "Адвокат",
    avatar: "./avatar.jpeg",
    description: (
      <>
        Опыт работы в правоохранительных учреждениях более 20 лет.
        <br />
        <br />
        Подполковник полиции в отставке.
      </>
    ),
  },
  {
    email: "welcome@shtymov.ru",
    phone: "+7 (495) 147-40-46, доб. 01",
    fullName: "Пшихопов Мурат Мухамедович",
    position: "Председатель коллегии",
    avatar: "./pshikhopov-avatar.jpeg",
  },
];

interface PeopleItemProps {
  email: string;
  phone: string;
  fullName: string;
  avatar: string;
  position: string;
  description?: React.ReactNode | string;
}

const PeopleItem = ({
  fullName,
  email,
  phone,
  position,
  description,
  avatar,
}: PeopleItemProps) => (
  <Box
    sx={(theme) => ({
      width: "100%",
      display: "flex",
      alignItems: "center",

      ".avatar": {
        mr: 5,
      },

      [theme.breakpoints.down(650)]: {
        flexDirection: "column",
        alignItems: "flex-start",

        ".avatar": {
          mr: 0,
          mb: 5,
          alignSelf: "center",
        },
      },
    })}
  >
    <Avatar src={avatar} className="avatar" sx={{ height: 240, width: 240 }} />

    <Stack spacing={2}>
      <div>
        <Typography level="body4" textTransform="uppercase">
          {position}
        </Typography>

        <Typography level="body1">{fullName}</Typography>
      </div>

      <Stack direction="row" spacing={4}>
        <div>
          <Typography level="body4" textTransform="uppercase">
            e-mail
          </Typography>

          <Typography level="body2">{email}</Typography>
        </div>

        <div>
          <Typography level="body4" textTransform="uppercase">
            телефон
          </Typography>

          <Typography level="body2">{phone}</Typography>
        </div>
      </Stack>

      <Typography level="body1">{description}</Typography>
    </Stack>
  </Box>
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
          направленный для защиты клиентов. Команда делает возможным решение
          задач, которые не под силу одному человеку.
        </Description>

        <Divider />

        {people.map(({ fullName, ...other }, index) => (
          <>
            <PeopleItem key={fullName} fullName={fullName} {...other} />

            {index !== people.length - 1 && <Divider />}
          </>
        ))}
      </Stack>
    </Wrapper>
  );
};

People.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default People;
