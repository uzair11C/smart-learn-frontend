import { Box } from "@mui/material";
import React from "react";

const CardComponent = ({
  width,
  height,
  padding,
  borderRadius,
  sx,
  OnClick,
  children,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: height,
        p: padding,
        background:
          "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
        backdropFilter: "blur(25px)",
        borderRadius: borderRadius,
        border: "1px solid rgba(255,255,255,0.2)",
        ...sx,
      }}
      onClick={OnClick}
    >
      {children}
    </Box>
  );
};

export default CardComponent;
