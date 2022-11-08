import { doc, updateDoc } from "firebase/firestore";

import { Article } from "types";
import { db } from "utils/firebase";

const updateArticle = async (id: string, data: Omit<Article, "id">) => {
  const docRef = doc(db, "articles", id);

  try {
    await updateDoc(docRef, data);

    return true;
  } catch (error) {
    return false;
  }
};

export default updateArticle;
