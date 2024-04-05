import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Link, Stack, Typography } from "@mui/joy";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";

const Cases = () => {
  return (
    <Wrapper
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        pb: 5,

        [theme.breakpoints.down(800)]: {
          ".info": {
            flexDirection: "column",

            ".info__text": {
              mb: 5,
            },
          },
        },

        [theme.breakpoints.down(500)]: {
          ".info": {
            px: 2,
          },
        },
      })}
    >
      <Title>Контакты</Title>

      <Box
        className="info"
        sx={{
          mt: 5,
          display: "flex",
        }}
      >
        <Stack spacing={2} sx={{ mr: 5 }} className="info__text">
          <Stack direction="row">
            <PlaceIcon sx={{ fontSize: 24, mr: 1 }} color="primary" />

            <Typography level="body1">
              г. Москва, ул. Академика Королева д. 8, корп. 2
            </Typography>
          </Stack>

          <Link href="tel:+74951474046">
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography>+7 (495) 147-40-46</Typography>
          </Link>

          <Link href="mailto:welcome@shtymov.ru">
            <AlternateEmailIcon sx={{ mr: 1 }} />

            <Typography>welcome@shtymov.ru</Typography>
          </Link>
        </Stack>

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A365330e4417293c6d1e5021b9fdbb059e1b4246e2540cc2975231a61645e2109&amp;source=constructor"
          width="100%"
          height="500"
          frameBorder="0"
          title="Карта"
        />
      </Box>
    </Wrapper>
  );
};

Cases.getLayout = (page: React.ReactElement) => (
  <MainLayout title="Контакты">{page}</MainLayout>
);

export default Cases;
