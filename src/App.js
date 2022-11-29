import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   regular,
//   solid,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

import "../src/styles/App.css";
import Nav from "./components/Nav";
import Upload from "./components/Upload/Upload";
import ImagesList from "./components/ImagesList/ImagesList";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
      {/* <FontAwesomeIcon
        className={"fa-bounce fa-custom-css"}
        icon={regular("truck")}
      />
      <FontAwesomeIcon
        className={"fa-shake fa-custom-css"}
        icon={icon({ name: "bell", style: "regular" })}
      />

      <FontAwesomeIcon
        className="fa-spin fa-custom-css"
        icon={regular("cog")}
      />
      <FontAwesomeIcon
        className="fa-bounce fa-custom-css"
        icon={icon({ name: "basketball", style: "solid", size: "300px" })}
      />
      <FontAwesomeIcon className="fa-custom-css" icon={solid("mountain")} /> */}

      <Nav />
      <Upload />
      <ImagesList />
    </Container>
  );
};

export default App;
