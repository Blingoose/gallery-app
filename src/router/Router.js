import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Header from "../components/Header";
import App from "../pages/App";
import Gallery from "../pages/Gallery";

const Router = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Router;
