import { addDoc, collection } from "firebase/firestore";

import { Article } from "types";
import { db } from "utils/firebase";

const addArticle = async (path: string, data: Omit<Article, "id">) => {
  try {
    const artcilesRef = collection(db, path);

    const docRef = await addDoc(artcilesRef, data);

    console.log("Document written with ID: ", docRef.id);

    return data;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addArticle;
