import { Backdrop } from "@mui/material";
import "./Spinner.css";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Spinner = () => {
  const { spinner } = useAuth();
  return (
    <Backdrop
      open={spinner}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 999 }}
    >
      <div>
        <div className="circles-row2">
          <div className="c4"></div>
          <div className="c5"></div>
          <div className="c6"></div>
        </div>
      </div>
    </Backdrop>
  );
};

export default Spinner;
