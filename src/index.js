import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
// import App from "./pages/App";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/gallery">
    <Router />
  </BrowserRouter>
);
