import React from "react";
import Nav from "./components/Nav";
import Upload from "./components/Upload/Upload";
import ImagesList from "./components/ImagesList/ImagesList";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
      <Nav />
      <Upload />
      <ImagesList />
    </Container>
  );
};

export default App;
