import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

import { Article } from "types";
import { db } from "utils/firebase";

const getArticles = async (qLimit: number, path: string) => {
  const articlesRef = collection(db, path);
  const q = query(articlesRef, orderBy("date", "desc"), limit(qLimit));
  const querySnapshot = await getDocs(q);

  return {
    articles: querySnapshot.docs.map((rec) => ({
      id: rec.id,
      ...rec.data(),
    })) as Article[],
    total: await (await getDocs(articlesRef)).size,
  };
};

export default getArticles;
