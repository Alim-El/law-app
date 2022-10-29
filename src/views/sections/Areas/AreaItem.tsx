import { ReactNode } from "react";
import { Typography } from "@mui/joy";
import { styled } from "@mui/joy/styles";

const Wrapper = styled("div")`
  height: 440px;
  max-width: 400px;
  min-width: 350px;
  border: 1px solid #e4ecf0;
  box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
  border-radius: 2px;
  padding: 44px 36px 41px 33px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(6.25)} !important;
`;

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
};

const AreaItem = ({ title, description, icon }: Props) => {
  return (
    <Wrapper data-aos="fade-up">
      {icon}

      <Typography
        textColor="#00486D"
        mt={5}
        fontSize={(theme) => theme.fontSize.xl}
      >
        {title}
      </Typography>

      <Typography
        component="div"
        mt={1.5}
        textColor="#00486D"
        mb="auto"
        fontSize={(theme) => theme.fontSize.lg}
      >
        {description}
      </Typography>

      {/* <Link
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
        endDecorator={<ArrowIcom />}
        underline="none"
        fontSize={(theme) => theme.fontSize.lg}
      >
        Learn more
      </Link> */}
    </Wrapper>
  );
};

export default AreaItem;