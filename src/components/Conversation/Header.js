import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/consultation");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#06061D",
        display: "flex",
        color: "#FFFFFF",
        padding: {
          lg: "20px 20px",
          md: "20px 10px",
          xs: "10px 5px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Box sx={{ cursor: "pointer", ":hover": { opacity: 0.5 } }}>
          <ArrowBackIosNew
            onClick={handleClick}
            style={{ width: "20px", height: "20px" }}
          />
        </Box>
        <Avatar
          alt="Career Sage"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" fontWeight="600" fontSize="4vmin">
            Career Sage
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "300", color: "lightgreen" }}
          >
            Active
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
