import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Header from "../components/Header";
import App from "../pages/App";

const Router = () => {
  return (
    <div>
      <Header pageApp={<App />} />
      <Routes>
        <Route path="gallery" element={<App />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Router;
