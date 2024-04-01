import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import Image from "next/image";

import { Logo } from "assets/img/Logo";
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
        <Box display="flex" alignItems="center" height={150} width={300}>
          <Logo mode="white" />
        </Box>

        <Typography textColor="#99B6C5" fontSize={19}>
          г. Москва, ул. Академика <br />
          Королева д. 8, корп. 2 <br /> <br />
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
