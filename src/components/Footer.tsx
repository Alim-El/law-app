import { styled } from "@mui/joy/styles";

const StyledFooter = styled("footer")`
  display: flex;
  align-items: center;
  min-height: 50px;
  padding-left: 24px;
  background: #002b41;
  color: #99b6c5;
`;

const Footer = () => (
  <StyledFooter>© {new Date().getFullYear()} Все права защищены.</StyledFooter>
);

export default Footer;
