import { Box, Link as MuiLink, linkClasses, Typography } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { SxProps } from "@mui/joy/styles/types";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";

import { ArrowIcon } from "assets/img";
import { Article } from "types";

const Wrapper = styled("div")`
  min-width: 300px;
  flex: 1 0 calc(33.33% - 20px);
  margin: 0 10px;
  border: 1px solid #e4ecf0;
  box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(6.25)} !important;
`;

const DocItem = ({
  title,
  date,
  id,
  image,
  animated,
  sx,
  path,
}: Article & { animated: boolean; sx?: SxProps; path: string }) => {
  const router = useRouter();
  return (
    <Wrapper data-aos={animated && "fade-up"} data-aos-once="true" sx={sx}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image || "./article.svg"}
        alt="tets"
        style={{ flex: 1, maxHeight: 260, minHeight: 260 }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: 260,
          px: 4.375,
          py: 5,
          flex: 1,
        }}
      >
        <Typography textColor="#00486D" fontSize={15}>
          {dayjs(date).format("MMMM DD, YYYY")}
        </Typography>

        <Typography
          textColor="#00486D"
          fontSize={22}
          display="block"
          mt={2.25}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // количество строк
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        <MuiLink
          sx={{
            display: "flex",
            color: "#00486D",
            fontWeight: 400,
            mt: "auto",

            [`.${linkClasses.endDecorator}`]: {
              ml: 2,
              mt: 0.2,
            },
          }}
          endDecorator={<ArrowIcon />}
          underline="none"
          fontSize={(theme) => theme.fontSize.lg}
          href={{
            pathname: `/${path}/[id]`,
            query: { id },
          }}
          component={Link}
        >
          Подробнее
        </MuiLink>
      </Box>
    </Wrapper>
  );
};

export default DocItem;
