import { doc, getDoc } from "firebase/firestore";

import { Article } from "types";
import { db } from "utils/firebase";

const getArticleById = async (path: string, id: string) => {
  const docRef = doc(db, path, id);
  const docSnap = await getDoc(docRef);

  return docSnap.data() as Article;
};

export default getArticleById;
