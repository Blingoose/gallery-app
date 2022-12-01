import React, { useEffect, useState } from "react";
import { ImageListItem, Box } from "@mui/material";
import CircularProgressFeature from "./CircularProgressFeature";
import { CheckCircleOutline } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import uploadFile from "../../firebase/uploadFile";
import recordDoc from "../../firebase/recordDoc";
import { useAuth } from "../../context/AuthContext";

const ProgressItem = ({ file }) => {
  const [progress, setProgress] = useState(100);
  const [imgURL, setImgURL] = useState(null);
  const { currentUser, setAlert } = useAuth();
  console.log(currentUser);

  useEffect(() => {
    const uploadImage = async () => {
      const imageName = uuidv4() + "." + file.name.split(".").pop();
      try {
        const url = await uploadFile(
          file,
          `gallery/${currentUser?.uid}`,
          imageName,
          setProgress
        );
        const galleryDocument = {
          imgURL: url,
          uid: currentUser?.uid || "",
          uEmail: currentUser?.email || "",
          uName: currentUser?.displayName || "",
          uPhoto: currentUser?.photoURL || "",
        };

        await recordDoc("gallery", galleryDocument, imageName);
        setImgURL(null);
      } catch (error) {
        setAlert({
          isAlert: true,
          severity: "error",
          message: error.message,
          timeout: 6000,
          location: "main",
        });
        console.log(error);
      }
    };
    setImgURL(URL.createObjectURL(file));
    uploadImage();
  }, [
    file,
    currentUser?.uid,
    currentUser?.email,
    currentUser?.displayName,
    currentUser?.photoURL,
    setAlert,
  ]);

  return (
    imgURL && (
      <ImageListItem cols={1} rows={1}>
        <img
          src={imgURL}
          alt="gallery"
          loading="lazy"
          style={{ overflow: "hidden" }}
        />
        <Box sx={backDrop}>
          {progress < 100 ? (
            <CircularProgressFeature value={progress} />
          ) : (
            <CheckCircleOutline
              sx={{
                width: "40px",
                height: "40px",
                color: "limegreen",
              }}
            />
          )}
        </Box>
      </ImageListItem>
    )
  );
};

export default ProgressItem;

const backDrop = {
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.5)",
};
