import { Box, Button, Typography } from "@mui/joy";

const Service = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        background: `url('/people.svg')`,
        height: 680,
        mx: 10.625,
        display: "flex",
      }}
    >
      <Box
        sx={{
          height: 490,
          width: 425,
          marginLeft: "auto",
          mt: "auto",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          background: "#00486D",
          px: 7,
          pt: 6.6,
        }}
      >
        <Typography textColor="white" fontWeight={400} fontSize={32}>
          Индивидуальные юридические услуги
        </Typography>

        <Typography
          textColor="white"
          fontSize={19}
          // lineHeight="35px"
          fontWeight={400}
          mt={2.8}
        >
          Один размер не подходит для всех, когда речь идет о ваших юридических
          потребностях. Мы создаем команду и стратегию в соответствии с вашим
          желаемым результатом.
        </Typography>

        <Button
          sx={{
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
    </Box>
  );
};

export default Service;
