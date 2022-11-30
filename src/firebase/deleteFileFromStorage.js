import { deleteObject, ref } from "firebase/storage";
import { storage } from "./config";

const deleteFileFromStorage = (filePath) => {
  const imageRef = ref(storage, filePath);
  return deleteObject(imageRef);
};

export default deleteFileFromStorage;
