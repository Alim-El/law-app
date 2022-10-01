import {
  IconButton,
  inputClasses,
  Stack,
  TextField,
  Typography,
} from "@mui/joy";
import { Box } from "@mui/system";
import Image from "next/image";

import Arrow from "assets/img/Arrow";

const Social = () => {
  return (
    <Stack
      component="section"
      id="contacts"
      spacing={23}
      direction="row"
      sx={{ background: "#00486D", py: 15, px: 10.625 }}
    >
      <Box>
        <Image src="/white-logo.svg" alt="logo" height={100} width={300} />

        <Typography textColor="#99B6C5" fontSize={19}>
          2972 Westheimer Road <br />
          Denver, CO 80021 <br />
          <a href="tel:(720) 555-0123">(720) 555-0123</a> <br />
          info.denver@mckinley.com
        </Typography>
      </Box>

      <Box width={400}>
        <Typography sx={{ color: "white", fontSize: 28 }}>
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
    </Stack>
  );
};

export default Social;
