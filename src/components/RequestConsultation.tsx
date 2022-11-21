import * as React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Link, ModalClose } from "@mui/joy";
import Button, { ButtonProps } from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  btnProps?: ButtonProps;
}

export default function RequestConsultation({ btnProps = {} }: Props) {
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
            mb="0.5em"
          >
            Запросить консультацию
          </Typography>

          <Stack spacing={2}>
            <div>
              <Typography level="body4" textTransform="uppercase">
                телефон
              </Typography>

              <Link underline="none" textColor="black" href="tel:+74951474046">
                +7 (495) 147-40-46
              </Link>
            </div>

            <div>
              <Typography level="body4" textTransform="uppercase">
                e-mail
              </Typography>

              <Link underline="none" href="mailto:welcome@shtymov.ru">
                welcome@shtymov.ru
              </Link>
            </div>

            <Divider />

            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <IconButton
                variant="outlined"
                color="success"
                component="a"
                href="https://wa.me/79264527777"
                target="_blank"
              >
                <WhatsAppIcon /> &shy; WhatsApp
              </IconButton>

              <IconButton
                variant="outlined"
                component="a"
                href="https://t.me/+79264527777"
                target="_blank"
              >
                <TelegramIcon /> &shy; Telegram
              </IconButton>
            </Stack>
          </Stack>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
