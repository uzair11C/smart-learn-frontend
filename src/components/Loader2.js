import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const Loader2 = ({ open }) => {
  return (
    <Backdrop
      open={open}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: " 20px",
      }}
    >
      <CircularProgress
        color="secondary"
        size={130}
        thickness={5}
        sx={{ position: "relative" }}
      />
    </Backdrop>
  );
};

export default Loader2;
