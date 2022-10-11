import { collection, getDocs } from "firebase/firestore";

import { Article } from "types";
import { db } from "utils/firebase";

const getArticles = async () => {
  const querySnapshot = await getDocs(collection(db, "articles"));

  return querySnapshot.docs.map((rec) => ({
    id: rec.id,
    ...rec.data(),
  })) as Article[];
};

export default getArticles;
