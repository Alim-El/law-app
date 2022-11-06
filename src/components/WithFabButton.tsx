import { PropsWithChildren, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Stack } from "@mui/joy";
import { Collapse, NoSsr } from "@mui/material";
import Fab from "@mui/material/Fab";
import { useRouter } from "next/router";

const WithFabButton = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isAdmin =
    typeof window !== "undefined" && sessionStorage.getItem("authed");

  const handleClick = (path: string) => () => {
    setOpen(false);
    router.push(path);
  };

  return (
    <Box>
      {children}
      <NoSsr>
        {isAdmin && (
          <Box
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
            }}
          >
            <Collapse in={open} timeout={{ exit: 0, enter: 500 }}>
              <Stack spacing={2} sx={{ mb: 2 }}>
                <Fab
                  onClick={handleClick("/new")}
                  variant="extended"
                  size="large"
                  color="primary"
                >
                  Кейс
                </Fab>
                <Fab
                  onClick={handleClick("/new-article")}
                  variant="extended"
                  size="large"
                  color="primary"
                  href="/new-article"
                >
                  Статья
                </Fab>
              </Stack>
            </Collapse>

            <Fab
              size="large"
              color="primary"
              sx={{
                svg: {
                  fontSize: 24,
                },
              }}
              onClick={() => setOpen(!open)}
            >
              <AddIcon />
            </Fab>
          </Box>
        )}
      </NoSsr>
    </Box>
  );
};

export default WithFabButton;
