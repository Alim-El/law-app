import { IconButton, inputClasses, TextField, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import Image from "next/image";

import Arrow from "assets/img/Arrow";
import Wrapper from "components/Wrapper";

const Social = () => {
  return (
    <Box id="contacts" sx={{ background: "#00486D", py: 15 }}>
      <Wrapper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          px: [2, 0],
        }}
      >
        <Box mr={[0, 5, 23]} mb={5}>
          <Image src="/white-logo.svg" alt="logo" height={100} width={300} />

          <Typography textColor="#99B6C5" fontSize={19}>
            2972 Westheimer Road <br />
            Denver, CO 80021 <br />
            <a href="tel:(720) 555-0123">(720) 555-0123</a> <br />
            info.denver@mckinley.com
          </Typography>
        </Box>

        <Box width={400}>
          <Typography sx={{ color: "white", fontSize: [20, 28] }}>
            Получайте юридические новости, советы и лучшие практики на свой
            почтовый ящик.
          </Typography>

          <TextField
            type="email"
            placeholder="Email Address"
            size="lg"
            endDecorator={
              <IconButton>
                <Arrow />
              </IconButton>
            }
            sx={{
              [`.${inputClasses.root}`]: {
                borderRadius: 2,
                background: "#99B6C5",
                border: "1px solid #99B6C5",
                mt: 3,
              },
            }}
          />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Social;
