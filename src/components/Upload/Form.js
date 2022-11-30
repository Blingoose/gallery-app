import React, { useRef, useEffect, useState } from "react";
import { Input, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../../styles/fontAwesomeIcons.css";
import "../../styles/Form.css";

const theme = createTheme({
  palette: {
    primary: purple,
  },
});

const Form = ({ setFiles }) => {
  const [scrolling, setScrolling] = useState(false);
  const fileRef = useRef();

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else setScrolling(false);
    });
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const backToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleChange = (event) => {
    setFiles([...event.target.files]);
    fileRef.current.value = null;
  };

  return (
    <form className="main-form">
      <Input
        type="file"
        inputProps={{ multiple: true }}
        sx={{ display: "none" }}
        inputRef={fileRef}
        onChange={handleChange}
      />
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          aria-label="add"
          color="primary"
          onClick={handleClick}
        >
          <Add fontSize="large" />
        </Button>
      </ThemeProvider>
      {scrolling && (
        <div className={`${scrolling ? "back-top-btn" : "none"}`}>
          <FontAwesomeIcon
            className="caret fa-bounce"
            size="3x"
            icon={duotone("caret-up")}
            onClick={backToTop}
          />
        </div>
      )}
    </form>
  );
};

export default Form;
