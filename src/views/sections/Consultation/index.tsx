import { Box } from "@mui/joy";

import Description from "components/Description";
import RequestConsultation from "components/RequestConsultation";
import Title from "components/Title";

const Consultation = () => {
  return (
    <Box
      p={(theme) => theme.spacing(20)}
      textAlign="center"
      sx={{ background: "#E4ECF0" }}
    >
      <Title>Нужна профессиональная юридическая консультация?</Title>

      <Description m={(theme) => theme.spacing(2.5, 0, 6.5)}>
        Получите бесплатную консультацию у наших юристов
      </Description>

      <RequestConsultation />
    </Box>
  );
};

export default Consultation;
