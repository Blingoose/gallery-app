import React, { useState } from "react";
import { ImageListItem, Box } from "@mui/material";
import CircularProgressFeature from "./CircularProgressFeature";
import { CheckCircleOutline } from "@mui/icons-material";

const ProgressItem = () => {
  const [progress, setProgress] = useState(50);

  return (
    <ImageListItem cols={1} rows={1}>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        alt="gallery"
        loading="lazy"
      />
      <Box sx={backDrop}>
        {progress < 100 ? (
          <CircularProgressFeature value={progress} />
        ) : (
          <CheckCircleOutline
            sx={{ width: "60", height: "60", color: "purple" }}
          />
        )}
      </Box>
    </ImageListItem>
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
