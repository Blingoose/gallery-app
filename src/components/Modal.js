import { Dialog, DialogTitle, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import AlertUser from "../Alert/AlertUser";

const Modal = () => {
  const {
    modal,
    setModal,
    alert: { location, isAlert },
    setAlert,
  } = useAuth();

  const handleClose = () => {
    setModal({ ...modal, isOpen: false });
  };

  useEffect(() => {
    if (modal.isOpen === false) {
      if (isAlert && location === "modal") {
        setAlert({ ...alert, isAlert: false });
      }
    }
  }, [isAlert, location, modal?.isOpen, setAlert]);

  return (
    <Dialog open={modal.isOpen} onClose={handleClose}>
      <DialogTitle>
        {modal.title}
        <IconButton
          aria-label="Close"
          onClick={handleClose}
          sx={{
            height: "40px",
            width: "40px",
            position: "absolute",
            top: "10px",
            right: "10px",
            color: (theme) => theme.palette.primary,
          }}
        >
          <FontAwesomeIcon
            fontSize="25px"
            icon={regular("xmark")}
            style={{ color: "#9031aa" }}
          />
        </IconButton>
      </DialogTitle>
      {location === "modal" && <AlertUser />}
      {modal.content}
    </Dialog>
  );
};

export default Modal;
