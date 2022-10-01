import { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/joy";

type Props = {
  children: ReactNode;
} & TypographyProps;

const Title = ({ children, ...props }: Props) => (
  <Typography
    fontSize={(theme) => theme.vars.fontSize.xl6}
    level="h1"
    color="primary"
    component="h1"
    textColor="#00486D"
    {...props}
  >
    {children}
  </Typography>
);

export default Title;
