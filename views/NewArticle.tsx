import "react-quill/dist/quill.snow.css";
import React, { ChangeEventHandler, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/joy";
import { Collapse, Divider } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import dynamic from "next/dynamic";

import Title from "components/Title";
import MainLayout from "layouts/MainLayout";
import { Article as ArticleType } from "types";
import { addArticle, storage } from "utils/firebase";

import Article from "./Article";
import ArticleItem from "./sections/Articles/ArticleItem";

const Editor = dynamic(() => import("react-quill").then((mod) => mod), {
  ssr: false,
});

const initialData = () => ({
  date: new Date().getTime(),
  description: "",
  title: "",
  image: "",
});

const NewArticle = () => {
  const [data, setData] = useState<Omit<ArticleType, "id">>(initialData);
  const [preview, setPreview] = useState(false);

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

  // State to store uploaded file
  const [file, setFile] = useState<File | null>();

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFile(event.target?.files?.[0]);
  };

  const handleSaveClick = () => {
    addArticle(data).then(() => {
      alert("Новая статься создана");
      setData(initialData);
      setFile(null);
      setPercent(0);
    });
  };

  const handleUpload = () => {
    if (!file) {
      alert("Сначала нужно загрузить изображение!");
    }

    const storageRef = ref(storage, `/${file?.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file as Blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setData((prevState) => ({ ...prevState, image: url }));
        });
      }
    );
  };

  return (
    <Box height="100%" px={10} py={5} sx={{ ".ql-container": { height: 300 } }}>
      <Title mb={5}>Добавление новой статьи</Title>
      <Box mb={5}>
        <TextField
          name="title"
          onChange={handleChangeTextField}
          value={title}
          sx={{ mb: 5 }}
          label="Заголовок"
        />
        <div>
          <input type="file" onChange={handleChange} accept="/image/*" />
          <button onClick={handleUpload}>Загрузить изображение</button>
          {percent !== 0 && (
            <Typography mt={1} textColor={percent === 100 ? "green" : "black"}>
              {percent}% загружено
            </Typography>
          )}
        </div>
      </Box>

      <Editor
        theme="snow"
        value={description}
        onChange={handleChangeEditor("description")}
      />

      <Stack direction="row" sx={{ my: 5 }} spacing={1}>
        <Button onClick={handleSaveClick}>Сохранить</Button>

        <Button variant="outlined" onClick={() => setPreview(!preview)}>
          Предпросмотр
        </Button>
      </Stack>

      <Collapse in={preview}>
        <Stack direction="row">
          <ArticleItem animated={false} id="1" {...data} />
          <ArticleItem animated={false} id="1" {...data} />
          <ArticleItem animated={false} id="1" {...data} />
        </Stack>

        <Divider sx={{ my: 10 }} />

        <Article previewMode article={{ ...data, id: "1" }} />
      </Collapse>
    </Box>
  );
};

NewArticle.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default NewArticle;
