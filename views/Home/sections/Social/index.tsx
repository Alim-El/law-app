import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import Image from "next/image";

import Wrapper from "components/Wrapper";

const Social = () => (
  <Box id="contacts" sx={{ background: "#00486D", py: 5 }}>
    <Wrapper
      sx={{
        display: "flex",
        flexWrap: "wrap",
        px: [2, 2, 0],
      }}
    >
      <Box mr={[0, 5, 23]}>
        <Image src="/white-logo.svg" alt="logo" height={100} width={300} />

        <Typography textColor="#99B6C5" fontSize={19}>
          г. Москва, ул. Академика <br />
          Королева д. 8, корп. 2 <br /> <br />
          МО, г. Мытищи, ул. Летная <br />
          стр. 19, офис: 375, 376 <br /> <br />
          <a href="tel:+74951474046">+7 (495) 147-40-46</a>
          <br />
          <a href="mailto:welcome@shtymov.ru">welcome@shtymov.ru</a>
          <br />
        </Typography>
      </Box>
    </Wrapper>
  </Box>
);

export default Social;
