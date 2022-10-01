import { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/joy";

type Props = {
  children: ReactNode;
} & TypographyProps;

const Description = ({ children, ...props }: Props) => (
  <Typography
    fontSize={(theme) => theme.vars.fontSize.xl2}
    lineHeight={(theme) => theme.vars.lineHeight.lg}
    fontWeight={300}
    textColor="#00486D"
    {...props}
  >
    {children}
  </Typography>
);

export default Description;
