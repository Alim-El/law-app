import { Box, buttonClasses, Stack, Typography } from "@mui/joy";
import Image from "next/image";

import Request from "components/Request";
import Title from "components/Title";

const MainSection = () => (
  <Box
    sx={{
      background: "#E4ECF0",
      height: 755,
      display: "flex",
      flex: 1,
      position: "relative",
    }}
  >
    <Stack
      spacing={3.125}
      sx={{ justifyContent: "center", pr: 27, ml: 10.625, color: "#00486D" }}
    >
      <Title>Корпоративное юридическое представительство</Title>

      <Typography
        fontSize={(theme) => theme.vars.fontSize.xl2}
        lineHeight={(theme) => theme.vars.lineHeight.lg}
        fontWeight={300}
        textColor="#00486D"
      >
        Мы понимаем, какие трудности и стресс вызывают ваши юридические
        проблемы. Наша команда стремится предоставить вам индивидуальное
        внимание, общение и преданность делу, которые вы заслуживаете.
      </Typography>

      {/* <Button
        sx={{
          alignSelf: "flex-start",
          fontWeight: 300,

          [`&.${buttonClasses.root}`]: {
            mt: 4.375,
          },
        }}
      >
        Request Consultation
      </Button> */}

      <Request
        btnProps={{
          sx: {
            alignSelf: "flex-start",

            [`&.${buttonClasses.root}`]: {
              mt: 4.375,
            },
          },
        }}
      />
    </Stack>

    <Box
      sx={{
        minWidth: 576,
        minHeight: "100%",
        flex: 1,
        backgroundColor: "#00486D",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 56,
          right: 75,
          filter: "drop-shadow(0px 32px 24px rgba(0, 72, 109, 0.5))",
          height: 850,
        }}
      >
        <Image
          src="/main-img.png"
          alt="main"
          height={780}
          quality={100}
          width={595}
        />
      </Box>
    </Box>
  </Box>
);

export default MainSection;
