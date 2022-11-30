import { Box, Alert, Collapse, IconButton } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const AlertUser = () => {
  const notifyRef = useRef();
  const {
    alert: { message, timeout, severity, isAlert },
    setAlert,
  } = useAuth();

  useEffect(() => {
    notifyRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

    let timer;
    if (timeout) {
      timer = setTimeout(() => {
        setAlert({ ...alert, isAlert: false });
      }, timeout);
    }
    return () => clearTimeout(timer);
  }, [timeout, setAlert]);

  return (
    <Box ref={notifyRef}>
      <Collapse in={isAlert}>
        <Alert
          severity={severity}
          action={
            <IconButton
              sx={{ width: "30px", height: "30px" }}
              aria-label="Close"
              size="small"
              onClick={() => setAlert({ ...alert, isAlert: false })}
            >
              <FontAwesomeIcon
                fontSize="25px"
                icon={regular("xmark")}
                style={{ color: "#9031aa" }}
              />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default AlertUser;
