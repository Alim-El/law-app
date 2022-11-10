import { useState } from "react";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Link, Stack } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { Divider, Drawer } from "@mui/material";
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

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2),
  },

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

  const [openDrawer, setOpenDrawer] = useState(false);
  const ref = useRef(null);

  const handleClose = () => setOpenDrawer(false);

  return (
    <StyledHeader
      style={{ height }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      ref={ref}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flex: 1,
          maxWidth: 1270,
        }}
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
              href={`/#${path}`}
              key={path}
              sx={{ display: ["none", "none", "none", "block"] }}
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
          <StyledLink
            sx={{ display: ["none", "none", "none", "block"] }}
            underline="none"
            textColor="black"
            href="tel:+74951474046"
          >
            +7 (495) 147-40-46
          </StyledLink>

          <RequestConsultation
            btnProps={{ sx: { display: ["none", "none", "block", "block"] } }}
          />

          <IconButton
            onClick={() => setOpenDrawer(!openDrawer)}
            sx={{ display: ["block", "block", "block", "none"] }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Box>
      <Drawer
        open={openDrawer}
        onClose={handleClose}
        anchor="right"
        container={ref.current}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pl={2}
        >
          {/* <Typography level="h3" textColor="#00486D" component="span">
            Меню
          </Typography> */}

          <Image alt="logo-mini" src="/logo.svg" height={30} width={150} />

          <IconButton
            sx={{ m: 2, alignSelf: "flex-end" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <Stack sx={{ p: (theme) => theme.spacing(5, 15, 5, 5) }} spacing={3}>
          {routes.map(({ name, path }) => (
            <StyledLink
              underline="none"
              textColor="#00486D"
              href={`/#${path}`}
              key={path}
              onClick={handleClose}
            >
              {name}
            </StyledLink>
          ))}
        </Stack>

        <Divider />

        <Stack sx={{ mt: 3, ml: 2 }} spacing={1}>
          <StyledLink
            underline="none"
            textColor="black"
            href="tel:+74951474046"
          >
            +7 (495) 147-40-46
          </StyledLink>

          <StyledLink href="welcome@shtymov.ru">welcome@shtymov.ru</StyledLink>
        </Stack>

        <RequestConsultation
          btnProps={{ sx: { alignSelf: "center", mt: "auto", mb: 2 } }}
        />
      </Drawer>
    </StyledHeader>
  );
};

export default Header;
