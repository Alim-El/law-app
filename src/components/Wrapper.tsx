import { Box, BoxProps, styled } from "@mui/joy";

const StyledWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1270,

  [theme.breakpoints.down(1300)]: {
    maxWidth: 1000,
  },
  [theme.breakpoints.down(1024)]: {
    maxWidth: 750,
  },
  [theme.breakpoints.down(400)]: {
    maxWidth: "auto",
  },
  margin: "0 auto",
}));

const Wrapper = ({ children, ...props }: BoxProps) => {
  return (
    <StyledWrapper component="section" {...props}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
