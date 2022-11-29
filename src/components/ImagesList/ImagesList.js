import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-18-image-lightbox";
import { Typography, Tooltip, Avatar } from "@mui/material";
import moment from "moment";
import ImageMenu from "./ImageMenu";
import "react-18-image-lightbox/style.css";
import "../../styles/ImageList.css";

import profileImg from "../../img/sweet-dog.jpg";

export default function ImagesList() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <ImageList
        sx={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(300px, 1fr))!important",
        }}
      >
        {itemData.map((item, index) => (
          <ImageListItem
            className="image-list-item"
            key={item.img}
            sx={{
              opacity: "1",
              transition: "opacity 0.3s linear",
              cursor: "pointer",
              "&:hover": { opacity: "0.7" },
            }}
          >
            <ImageMenu />
            <img
              className="img-card"
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
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
              {moment(new Date() - 2000 * 1200 * 60).fromNow()}
            </Typography>
            <Tooltip
              placement="left"
              title="Blingoose"
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
                variant="round"
                src={profileImg}
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
        ))}
      </ImageList>
      {isOpen && (
        <Lightbox
          mainSrc={itemData[photoIndex].img}
          nextSrc={itemData[(photoIndex + 1) % itemData.length].img}
          prevSrc={
            itemData[(photoIndex + itemData.length - 1) % itemData.length].img
          }
          onCloseRequest={() => setIsOpen(false)}
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % itemData.length)
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + itemData.length - 1) % itemData.length)
          }
          imageTitle={itemData[photoIndex].title}
        />
      )}
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
