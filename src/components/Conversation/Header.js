import React from "react";
import { Box, Typography } from "@mui/material";
import { MoreVert, ArrowBackIosNew } from "@mui/icons-material";
import { Avatar } from "./Avatar";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/conversations");
    };

    return (
        <Box
            sx={{
                backgroundColor: "#06061D",
                display: "flex",
                width: "100%",
                maxWidth: "100%",
                color: "#FFFFFF",
                padding: {
                    lg: "0.75rem 2rem",
                    md: "0.75rem 1.5rem",
                    xs: "0.75rem 0.25rem",
                },
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "1.75rem",
                    alignItems: "center",
                }}
            >
                <Box sx={{ cursor: "pointer", ":hover": { opacity: 0.5 } }}>
                    <ArrowBackIosNew
                        onClick={handleClick}
                        style={{ width: "20px", height: "20px" }}
                    />
                </Box>
                <Avatar />
                🤖
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h4" fontWeight="600" fontSize="5vmin">
                        Career Sage
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: "300", color: "lightgreen" }}
                    >
                        Active
                    </Typography>
                </div>
            </div>
            <MoreVert style={{ width: "20px", height: "20px" }} />
        </Box>
    );
};
