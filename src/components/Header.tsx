import { Link, Stack } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";

import routes from "routes";

import RequestConsultation from "./RequestConsultation";

const StyledHeader = styled(motion.header)(({ theme }) => ({
  width: "100%",
  display: "flex",
  padding: theme.spacing(0, 10.625),
  background: "white",

  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9,
}));

const StyledLink = styled(Link)({
  ":before": {
    content: `''`,
    position: "absolute",
    width: "100%",
    height: 2,
    borderRadius: 4,
    backgroundColor: "#0094E8",
    bottom: 0,
    left: 0,
    transformOrigin: "right",
    transform: "scaleX(0)",
    transition: "transform .3s ease-in-out",
  },

  ":hover:before": {
    transformOrigin: "left",
    transform: "scaleX(1)",
  },
});

const Header = () => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(
    scrollYProgress,
    [0, 0.01, 0.02, 0.03, 0.04],
    [108, 100, 90, 80, 70]
  );

  return (
    <StyledHeader
      style={{ height }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
        <NextLink href="/" passHref>
          <Link>
            <Image src="/logo.svg" alt="logo" height={100} width={200} />
          </Link>
        </NextLink>

        {routes.map(({ name, path }) => (
          <StyledLink
            underline="none"
            textColor="#00486D"
            href={`#${path}`}
            key={path}
          >
            {name}
          </StyledLink>
        ))}
      </Stack>

      <Stack
        direction="row"
        sx={{ alignItems: "center", ml: "auto" }}
        spacing={4}
      >
        <StyledLink underline="none" textColor="black" href="tel:123-456-7890">
          (123) 456-7890
        </StyledLink>

        <RequestConsultation />
      </Stack>
    </StyledHeader>
  );
};

export default Header;
