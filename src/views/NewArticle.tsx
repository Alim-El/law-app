import "react-quill/dist/quill.snow.css";
import { ChangeEventHandler, useState } from "react";
import { Box, Button, TextField } from "@mui/joy";
import dynamic from "next/dynamic";

import Title from "components/Title";
import MainLayout from "layouts/MainLayout";
import { Article } from "types";
import { addArticle } from "utils/firebase";

const Editor = dynamic(() => import("react-quill").then((mod) => mod), {
  ssr: false,
});

const initialData = () => ({
  date: new Date().getTime(),
  description: "",
  title: "",
});

const NewArticle = () => {
  const [data, setData] = useState<Omit<Article, "id">>(initialData);

  const { title, description } = data;

  const handleChangeTextField: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { value, name } = target;

    setData({ ...data, [name]: value });
  };

  const handleChangeEditor = (name: string) => (value: string) => {
    setData({ ...data, [name]: value });
  };

  const handleSaveClick = () => {
    addArticle(data).then((data) => {
      alert("Новая статься создана");
      setData(initialData);
    });
  };

  return (
    <Box height="100%" px={10} py={5} sx={{ ".ql-container": { height: 300 } }}>
      <Title mb={5}>Добавление новой статьи</Title>
      <TextField
        name="title"
        onChange={handleChangeTextField}
        value={title}
        sx={{ mb: 5 }}
        label="Заголовок"
      />

      <Editor
        theme="snow"
        value={description}
        onChange={handleChangeEditor("description")}
      />

      <Button onClick={handleSaveClick} sx={{ mt: 5 }}>
        Сохранить
      </Button>
    </Box>
  );
};

NewArticle.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default NewArticle;
