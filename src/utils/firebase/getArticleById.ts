import { doc, getDoc } from "firebase/firestore";

import { Article } from "types";
import { db } from "utils/firebase";

const getArticleById = async (id: string) => {
  const docRef = doc(db, "articles", id);
  const docSnap = await getDoc(docRef);

  return docSnap.data() as Article;
};

export default getArticleById;
