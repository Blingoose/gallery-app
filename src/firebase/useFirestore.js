import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "./config";

const useFirestore = (collectionName = "gallery") => {
  const [docs, setDocs] = useState([]);
  const { setAlert } = useAuth;

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("timestamp", "desc")
    );

    // const observerOBJ={
    //     next: (snapshot)=>{
    //         const documents=[]
    //         snapshot.forEach(doc => {
    //             documents.push({id:doc.id, data:doc.data()})
    //             setDocs(documents)
    //         });
    //     },
    //     error: (error)=>{
    //         alert(error.message)
    //         console.log(error)
    //     }
    // }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const documents = [];
        snapshot.forEach((doc) => {
          documents.push({ id: doc.id, data: doc.data() });
        });
        setDocs(documents);
      },
      (error) => {
        setAlert({
          isAlert: true,
          severity: "error",
          message: error.message,
          timeout: 6000,
          location: "main",
        });
        console.log(error);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
