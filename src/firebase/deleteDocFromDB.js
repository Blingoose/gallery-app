import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./config";

const deleteDocFromDB = (collectionName, documentId) => {
  return deleteDoc(doc(db, collectionName, documentId));
};

export default deleteDocFromDB;
