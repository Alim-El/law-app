import { ChangeEventHandler, useState } from "react";
import { Box, Button, Textarea, TextField } from "@mui/joy";

import Title from "components/Title";
import MainLayout from "layouts/MainLayout";
import { Article } from "types";
import { addArticle } from "utils/firebase";

const initialData = {
  date: new Date().getTime(),
  description: "",
  title: "",
};

const NewArticle = () => {
  const [data, setData] = useState<Omit<Article, "id">>(initialData);

  const { title, description } = data;

  const handleChangeTextField: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const { value, name } = target;

    setData({ ...data, [name]: value });
  };

  const handleSaveClick = () => {
    addArticle(data).then((data) => {
      alert("Новая статься создана");
      setData(initialData);
    });
  };

  return (
    <Box height="100%" px={10} py={5}>
      <Title mb={5}>Добавление новой статьи</Title>

      <TextField
        name="title"
        onChange={handleChangeTextField}
        value={title}
        sx={{ mb: 5 }}
        label="Заголовок"
      />

      <Textarea
        name="description"
        onChange={handleChangeTextField}
        value={description}
        minRows={5}
        placeholder="Текст статьи"
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
