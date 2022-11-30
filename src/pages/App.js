import React from "react";
import Nav from "../components/Nav";
import Upload from "../components/Upload/Upload";
import ImagesList from "../components/ImagesList/ImagesList";
import { Container } from "@mui/material";
import AuthContext from "../context/AuthContext";
import Modal from "../components/Modal";
import Spinner from "../Spinner/Spinner";
import MainAlert from "../Alert/MainAlert";

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: "6rem" }}>
      <AuthContext>
        <Spinner />
        <Modal />
        <Nav />
        <Upload />
        <MainAlert />
        <ImagesList />
      </AuthContext>
    </Container>
  );
};

export default App;
