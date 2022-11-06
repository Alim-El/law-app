import "react-quill/dist/quill.snow.css";
import React, { ChangeEventHandler, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/joy";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import dynamic from "next/dynamic";

import Title from "components/Title";
import MainLayout from "layouts/MainLayout";
import { Article } from "types";
import { addArticle, storage } from "utils/firebase";

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
    addArticle(data).then(() => {
      alert("Новая статься создана");
      setData(initialData);
    });
  };

  // State to store uploaded file
  const [file, setFile] = useState<File>();

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFile(event.target?.files?.[0]);
  };

  console.log(file);

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
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
          console.log(url);
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
