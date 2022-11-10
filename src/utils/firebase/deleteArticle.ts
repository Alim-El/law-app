import { deleteDoc, doc } from "firebase/firestore";

import { db } from ".";

const deleteArticle = async (id: string) => {
  await deleteDoc(doc(db, "/articles", id));
};

export default deleteArticle;
