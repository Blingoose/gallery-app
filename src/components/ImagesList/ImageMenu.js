import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import deleteDocFromDB from "../../firebase/deleteDocFromDB";
import deleteFileFromStorage from "../../firebase/deleteFileFromStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useAuth } from "../../context/AuthContext";

export default function ImageMenu({ imageId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { currentUser, setAlert } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    try {
      await deleteDocFromDB("gallery", imageId);
      await deleteFileFromStorage(
        `gallery/${currentUser.uid}/${imageId}` ||
          `gallery/${"undefined"}/${imageId}`
      );
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: "error",
        message: error.message,
        timeout: 6000,
        location: "main",
      });
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Box>
        {/* <Tooltip title="Options"> */}
        <IconButton
          onClick={handleClick}
          sx={{
            borderRadius: "0",
            position: "absolute",
            width: "50px",
            height: "50px",
            right: 0,
            top: "0",
            color: "white",
            background: "rgba(0,0,0,0.0)",
            "&:hover": { background: "rgba(144, 49, 170, 0.902)" },
          }}
        >
          <FontAwesomeIcon
            fontSize="35px"
            icon={duotone("ellipsis-vertical")}
            className="menu-ellipsis-icon"
          />
        </IconButton>
        {/* </Tooltip> */}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 2,
          sx: {
            border: "2px solid #9031aa",
            color: "purple",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              borderTop: "2px solid #9031aa",
              borderLeft: "2px solid #9031aa",
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-60%) translateX(-3px) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleDelete}>
          <ListItemIcon sx={{ color: "#9031aa" }}>
            <FontAwesomeIcon
              className="fa-shake"
              fontSize={"20px"}
              icon={solid("trash")}
            />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
