import * as React from "react";
import { ModalClose } from "@mui/joy";
import Button, { ButtonProps } from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  btnProps?: ButtonProps;
}

export default function Request({ btnProps = {} }: Props) {
  const [open, setOpen] = React.useState(false);
  const { sx, ...props } = btnProps;

  return (
    <React.Fragment>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          ...sx,
          background: "#00486D",
          color: "white",
          borderRadius: 4,
          fontWeight: 300,
          fontSize: 16,
          p: (theme) => theme.spacing(2, 3),

          ":hover": {
            background: "#015d8b",
          },
        }}
        {...props}
      >
        Запросить консультацию
      </Button>

      <Modal
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Запросить консультацию
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Введите свои данные
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <TextField label="Имя" autoFocus required />
              <TextField
                label="Номер"
                required
                type="tel"
                placeholder="+7 (___) ___ __ __"
              />
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
