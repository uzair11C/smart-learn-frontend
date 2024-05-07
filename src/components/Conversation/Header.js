import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Header = ({ status, limit }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/consultation", { replace: true });
    };

    return (
        <Box
            sx={{
                backgroundColor: "#06061D",
                display: "flex",
                color: "#FFFFFF",
                padding: "1.5% 7%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    // ml: "5%",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                    }}
                >
                    <Box sx={{ cursor: "pointer", ":hover": { opacity: 0.5 } }}>
                        <ArrowBackIosNew
                            onClick={handleClick}
                            // sx={{ width: "20px", height: "20px" }}
                            fontSize="large"
                        />
                    </Box>
                    <Avatar
                        alt="Career Sage"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 60, height: 60 }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            variant="h4"
                            fontWeight="600"
                            fontSize="4vmin"
                        >
                            Career Sage
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: "300", color: "lightgreen" }}
                        >
                            {status === "typing" ? "Typing..." : "Active"}
                        </Typography>
                    </Box>
                </Box>
                <Typography
                    variant="p"
                    component="p"
                    fontSize="3vmin"
                    fontWeight="bold"
                    fontFamily="monospace"
                    color={
                        limit < 45
                            ? "green"
                            : limit <= 60
                            ? "yellow" // Changed to <= to include 60 in the yellow range
                            : "red"
                    }
                >
                    Limit: {limit} / 70
                </Typography>
            </Box>
        </Box>
    );
};
