import { deleteDoc as deleteFDoc, doc } from "firebase/firestore";

import { db } from ".";

const deleteDoc = async (path: string, id: string) => {
  await deleteFDoc(doc(db, path, id));
};

export default deleteDoc;
