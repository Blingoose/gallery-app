import { ImageList } from "@mui/material";
import React from "react";
import ProgressItem from "./ProgressItem";

const ProgressList = ({ files }) => {
  console.log(files);
  return (
    <ImageList rowHeight={150} cols={7}>
      {files.map((file, index) => (
        <ProgressItem file={file} key={index} />
      ))}
    </ImageList>
  );
};

export default ProgressList;
