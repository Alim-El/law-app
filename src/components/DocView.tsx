import { useTheme } from "@mui/joy";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { NoSsr, useMediaQuery } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";

import { Article } from "types";
import deleteDoc from "utils/firebase/deleteDoc";
import isAuthed from "utils/isAuthed";

import Title from "./Title";

interface Props {
  article: Article;
  previewMode?: boolean;
  path: string;
}

const DocView = ({
  article: { title, date, description },
  previewMode,
  path,
}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const authed = isAuthed();
  const router = useRouter();
  const { id } = router.query;

  const handleEditButtonClick = () => {
    const url = {
      pathname: `/edit-${path.replace("/", "").slice(0, -1)}`,
      query: {
        articleId: id,
      },
    };

    router.push(url);
  };

  const handleDeleteButtonClick = async () => {
    deleteDoc(path, id as string).then(() => {
      alert("Кейс удален");

      router.push(`/${path}`);
    });
  };

  return (
    <>
      <Title
        pb={5}
        sx={{
          fontSize: (theme) => [
            theme.vars.fontSize.xl,
            theme.vars.fontSize.xl3,
            theme.vars.fontSize.xl4,
          ],
          px: [1.25, 0],
          textAlign: "left",
        }}
      >
        {title}
      </Title>

      <div
        style={{
          textAlign: "justify",
          padding: isMobile ? "0 10px" : "0",
          marginBottom: 40,
          overflowWrap: "break-word",
          overflow: "hidden",
        }}
        dangerouslySetInnerHTML={{
          __html: description.replace(/&nbsp;/g, " ") || "",
        }}
      />

      <Typography
        textAlign="right"
        sx={{
          textAlign: "right",
          mt: "auto",
          mb: 5,
          mr: [2, 0],
          fontSize: (theme) => [theme.vars.fontSize.sm, theme.vars.fontSize.md],
        }}
      >
        {dayjs(date).format("MMMM DD, YYYY")}
      </Typography>

      {authed && !previewMode && (
        <NoSsr>
          <Stack spacing={5} direction="row" sx={{ mb: 5, mt: "auto" }}>
            <Button onClick={handleEditButtonClick}>Редактировать</Button>
            <Button color="danger" onClick={handleDeleteButtonClick}>
              Удалить
            </Button>
          </Stack>
        </NoSsr>
      )}
    </>
  );
};

export default DocView;
