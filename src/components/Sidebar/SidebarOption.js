import React from "react";
import { Box, Typography, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SidebarOption = ({ href, label, active, icon: Icon }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(href);
  };

  return (
    <ListItem disablePadding sx={{ marginBottom: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "0.25rem",
          paddingLeft: "0.25rem",
          cursor: "pointer",
          transition: "opacity 0.3s",
          borderRadius: "12px",
          backdropFilter: "blur(25px)",
          background: active
            ? "url('/public/images/Card.png'), linear-gradient(-253.09deg, rgba(217, 217, 217, 0.15) 50.53%, rgba(217, 217, 217, 0) 100.04%)"
            : "",
          ":hover": {
            opacity: active ? "1" : "0.5",
          },
        }}
        active={active}
        onClick={handleClick}
      >
        <Icon style={{ width: "3.5rem", height: "3.5rem" }} />
        <Typography variant="h5" style={{ letterSpacing: "2px" }}>
          {label}
        </Typography>
      </Box>
    </ListItem>
  );
};
