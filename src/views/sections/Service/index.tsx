import { Box, Button, Typography } from "@mui/joy";

import Wrapper from "components/Wrapper";

const Service = () => {
  return (
    <Wrapper
      id="about"
      sx={{
        background: `url('/people.svg')`,
        height: 680,
        display: "flex",
        justifyContent: ["center", "flex-end"],
        alignItems: ["center", "flex-end"],
      }}
    >
      <Box
        sx={{
          height: ["100%", 490],
          width: ["100%", 425],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#00486D",
          px: [2, 7],
        }}
      >
        <Typography textColor="white" fontWeight={400} fontSize={32}>
          Индивидуальные юридические услуги
        </Typography>

        <Typography textColor="white" fontSize={19} fontWeight={400} mt={2.8}>
          Один размер не подходит для всех, когда речь идет о ваших юридических
          потребностях. Мы создаем команду и стратегию в соответствии с вашим
          желаемым результатом.
        </Typography>

        <Button
          sx={{
            alignSelf: "flex-start",
            backgroundColor: "white",
            color: "#00486D",
            p: (theme) => theme.spacing(1.5, 3),
            fontSize: 18,
            lineHeight: "35px",
            mt: 6,

            ":hover": {
              backgroundColor: "#e3e1e1",
            },
          }}
        >
          О нашей фирме
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Service;
