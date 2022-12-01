import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const CircularProgressFeature = ({ value }) => {
  return (
    <Box>
      <CircularProgress
        size={40}
        prefix="%"
        thickness={4}
        variant="determinate"
        value={value}
        sx={{ color: "darkorange" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
          fontSize="1rem"
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressFeature;
