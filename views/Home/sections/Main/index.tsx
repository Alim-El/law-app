import { Box, buttonClasses, Stack } from "@mui/joy";
import Image from "next/image";

import Description from "components/Description";
import Request from "components/RequestConsultation";
import Title from "components/Title";
import Wrapper from "components/Wrapper";

const bg =
  "linear-gradient(to right, rgba(228, 236, 240, 0.85), rgba(228, 236, 240, 0.85)), url('./murat-bg.jpeg') top / cover no-repeat";

const MainSection = () => (
  <Box
    sx={{
      background: [bg, bg, bg, "#E4ECF0"],
      backgroundSize: "cover",
      maxHeight: 755,
      height: ["auto", "auto", "auto", 755],
      display: "flex",
      flex: 1,
      maxWidth: "100vw",
    }}
  >
    <Wrapper
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        py: [10, 18],
      }}
    >
      <Stack
        spacing={6}
        sx={{
          width: ["100%", "100%", "100%", "55%"],
          flex: 1,
        }}
      >
        <Title
          sx={{
            display: ["none", "none", "none", "block"],
            textAlign: ["center", "center", "center", "left"],
            fontSize: 50,
          }}
        >
          Коллегия адвокатов Московской области <br /> {`"Закон и Человек"`}
        </Title>

        <Title
          sx={{
            display: ["none", "block", "block", "none"],
            textAlign: ["center", "center", "center", "left"],
          }}
        >
          Коллегия адвокатов Московской области {`"Закон и Человек"`}
        </Title>
        <Title
          sx={{
            display: ["block", "none"],
            textAlign: ["center", "center", "center", "left"],
          }}
        >
          Коллегия адвокатов {`"Закон и Человек"`}
        </Title>

        <Description sx={{ textAlign: ["center", "center", "center", "left"] }}>
          Мы понимаем, какие трудности и стресс вызывают ваши юридические
          проблемы. Наша команда стремится предоставить вам индивидуальное
          внимание, общение и преданность делу, которые вы заслуживаете.
        </Description>

        <Request
          btnProps={{
            sx: {
              alignSelf: ["center", "center", "center", "flex-start"],

              [`&.${buttonClasses.root}`]: {
                mt: 8,
              },
            },
          }}
        />
      </Stack>

      <Box
        sx={{
          display: ["none", "none", "none", "flex"],
          width: "100%",
          minHeight: "100%",
          flex: 1,
          backgroundColor: "#00486D",
          position: "absolute",
          left: 780,
          top: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 55,
            left: -104,
            filter: "drop-shadow(0px 32px 24px rgba(0, 72, 109, 0.5))",
            height: 753,
          }}
        >
          <Image
            src="/main-img.png"
            alt="main"
            height={753}
            quality={100}
            width={595}
          />
        </Box>
      </Box>
    </Wrapper>
  </Box>
);

export default MainSection;
