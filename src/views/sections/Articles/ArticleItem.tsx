import { Box, Link, linkClasses, Typography } from "@mui/joy";
import { styled } from "@mui/joy/styles";

import { ArrowIcon } from "assets/img";

const Wrapper = styled("div")`
  min-width: 350px;
  flex: 1;
  border: 1px solid #e4ecf0;
  box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(6.25)} !important;
`;

interface Props {
  title: string;
  date: string;
}

const ArticleItem = ({ title, date }: Props) => {
  return (
    <Wrapper data-aos="fade-up">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://source.unsplash.com/random/?h=260&productivity,law"
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
          {date}
        </Typography>

        <Typography textColor="#00486D" fontSize={22} display="block" mt={2.25}>
          {title}
        </Typography>

        <Link
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
        >
          Подробнее
        </Link>
      </Box>
    </Wrapper>
  );
};

export default ArticleItem;
