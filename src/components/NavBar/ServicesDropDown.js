import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ServicesDropDown = ({
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <>
      {isHovered && (
        <Box
          sx={{
            display: isHovered ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            position: "absolute",
            top: "68%",
            left: "53%",
            p: "15px",
            background:
              "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
            backdropFilter: "blur(25px)",
            borderRadius: "8px",
            // width: "15%",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography
            variant="h6"
            sx={{
              display: "block",
              margin: "10px",
              textDecoration: "none",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
              }}
              to="/consultation"
            >
              Consultation
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "block",
              margin: "10px",
              textDecoration: "none",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
              }}
              to="/role-prediction"
            >
              Role Prediction
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "block",
              margin: "10px",
              textDecoration: "none",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
              }}
              to="/roadmaps"
            >
              Roadmaps
            </Link>
          </Typography>
        </Box>
      )}
    </>
  );
};

export default ServicesDropDown;
