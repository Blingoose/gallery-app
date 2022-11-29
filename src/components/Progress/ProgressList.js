import { ImageList } from "@mui/material";
import React from "react";
import ProgressItem from "./ProgressItem";

const ProgressList = () => {
  return (
    <ImageList rowHeight={150} cols={6}>
      <ProgressItem />
      <ProgressItem />
      <ProgressItem />
      <ProgressItem />
      <ProgressItem />
      <ProgressItem />
      <ProgressItem />
      <ProgressItem />
    </ImageList>
  );
};

export default ProgressList;
