import { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/joy";

type Props = {
  children: ReactNode;
} & TypographyProps;

const Title = ({ children, sx, ...props }: Props) => (
  <Typography
    level="h1"
    color="primary"
    component="span"
    textColor="#00486D"
    sx={{
      fontSize: (theme) => [
        theme.vars.fontSize.xl4,
        theme.vars.fontSize.xl5,
        theme.vars.fontSize.xl6,
      ],
      padding: 0,
      margin: 0,
      ...sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export default Title;
