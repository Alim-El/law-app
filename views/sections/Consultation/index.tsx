import { Box } from "@mui/joy";

import Description from "components/Description";
import RequestConsultation from "components/RequestConsultation";
import Title from "components/Title";
import Wrapper from "components/Wrapper";

const Consultation = () => {
  return (
    <Box sx={{ background: "#E4ECF0", py: 20 }}>
      <Wrapper textAlign="center">
        <Title sx={{ textAlign: "center" }}>
          Нужна профессиональная юридическая консультация?
        </Title>

        <Description
          m={(theme) => theme.spacing(2.5, 0, 6.5)}
          sx={{ textAlign: "center" }}
        >
          Получите бесплатную консультацию у наших юристов
        </Description>

        <RequestConsultation />
      </Wrapper>
    </Box>
  );
};

export default Consultation;
