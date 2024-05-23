import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Header = ({ status, limit, storeMessages }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/consultation", { replace: true });
    };

    // const { deleteMessages, storeMessages } = useUser();

    const ClearChat = async () => {
        // deleteMessages();
        await storeMessages([]);
        localStorage.removeItem("messages");
        await window.location.reload();
    };

    return (
        <Box
            sx={{
                backgroundColor: "#06061D",
                display: "flex",
                color: "#FFFFFF",
                padding: "1.3% 7%",
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
                            sx={{
                                width: { lg: "30px", xs: "20px" },
                                height: { lg: "30px", xs: "20px" },
                            }}
                        />
                    </Box>
                    <Avatar
                        alt="Sage"
                        src="/images/SageAvatar.png"
                        sx={{
                            width: { lg: "60px", xs: "50px" },
                            height: { lg: "60px", xs: "50px" },
                        }}
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
                            sx={{
                                fontWeight: "300",
                                color: "lightgreen",
                                fontSize: "3vmin",
                            }}
                        >
                            {status === "typing" ? "Typing..." : "Active"}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "30px",
                    }}
                >
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
                                ? "yellow"
                                : "red"
                        }
                    >
                        Limit: {limit} / 100
                    </Typography>
                    <Button
                        color="error"
                        variant="contained"
                        sx={{ textTransform: "none" }}
                        onClick={ClearChat}
                    >
                        Delete Chat
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
