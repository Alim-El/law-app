import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Collapse } from "@mui/material";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const email = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const pass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    const data = new FormData(event.currentTarget);

    if (
      (data.get("email") as string).toLowerCase() === email?.toLowerCase() &&
      data.get("password") === pass
    ) {
      localStorage.setItem("authed", "true");
      router.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </Button>

          <Collapse in={error}>
            <Alert severity="error">Неправильный e-майл или пароль</Alert>
          </Collapse>
        </Box>
      </Box>
    </Container>
  );
}
