import React, { useState } from "react";
import ProgressList from "../Progress/ProgressList";
import Form from "./Form";

const Upload = () => {
  const [files, setFiles] = useState([]);
  console.log(files);
  return (
    <div>
      <Form setFiles={setFiles} />
      <ProgressList files={files} />
    </div>
  );
};

export default Upload;
