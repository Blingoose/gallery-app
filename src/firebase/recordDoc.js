import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

const recordDoc = (collectionName, documentObject, id) => {
  const docRef = doc(collection(db, collectionName), id);
  return setDoc(docRef, {
    ...documentObject,
    timestamp: serverTimestamp(),
  });
};

export default recordDoc;
