import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-18-image-lightbox";
import { Typography, Tooltip, Avatar, ThemeProvider } from "@mui/material";
import moment from "moment";
import ImageMenu from "./ImageMenu";
import { styled } from "@mui/material/styles";
import { theme } from "../../MediaQueriesMaterialUI/styles";
import useFirestore from "../../firebase/useFirestore";
import "react-18-image-lightbox/style.css";
import "../../styles/ImageList.css";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {},
  [theme.breakpoints.up("tablet")]: {},
  [theme.breakpoints.up("desktop")]: { "&:hover": { opacity: "0.8" } },
}));

export default function ImagesList() {
  const { docs } = useFirestore("gallery");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <ImageList
        rowHeight={370}
        sx={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(300px, 1fr))!important",
        }}
      >
        {docs.map((item, index) => (
          <ThemeProvider key={item?.id} theme={theme}>
            <Responsive>
              <ImageListItem
                className="image-list-item"
                sx={{
                  opacity: "1",
                  transition: "opacity 0.3s linear",
                  cursor: "pointer",
                  "&:hover": {
                    mobile: "none",
                    tablet: "none",
                  },
                }}
              >
                <ImageMenu imageId={item.id} />
                <img
                  style={{
                    overflow: "hidden",
                  }}
                  className="img-card"
                  src={`${item?.data?.imgURL}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item?.data?.imgURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item?.data?.uName || item?.data?.uEmail}
                  loading="eager"
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                />
                {/* moment------upload time-------  */}
                <Typography
                  className="item-list-typography"
                  variant="body2"
                  component="span"
                >
                  {moment(item?.data?.timestamp?.toDate()).fromNow()}
                </Typography>
                <Tooltip
                  placement="left"
                  title={item?.data?.uName || item?.data?.uEmail}
                  componentsProps={{
                    tooltip: {
                      sx: {
                        color: "white",
                        backgroundColor: "#9031aa",
                        fontSize: "12px",
                      },
                    },
                  }}
                >
                  <Avatar
                    variant="square"
                    src={item?.data?.uPhoto}
                    sx={{
                      width: "40px",
                      height: "40px",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                    }}
                  />
                </Tooltip>
              </ImageListItem>
            </Responsive>
          </ThemeProvider>
        ))}
      </ImageList>
      {isOpen && (
        <Lightbox
          mainSrc={docs[photoIndex].data.imgURL}
          nextSrc={docs[(photoIndex + 1) % docs.length].data.imgURL}
          prevSrc={
            docs[(photoIndex + docs.length - 1) % docs.length].data.imgURL
          }
          onCloseRequest={() => setIsOpen(false)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % docs.length)
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + docs.length - 1) % docs.length)
          }
          imageTitle={docs[photoIndex].data.uName}
        />
      )}
    </>
  );
}
