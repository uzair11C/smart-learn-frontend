import React, { useEffect, useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";

export const Body = ({ messages }) => {
    const messageRef = useRef(null); // Reference to the result component

    useEffect(() => {
        // Focus on the last message whenever messages change
        if (messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <Box sx={{ flex: "1", overflowY: "auto", height: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    // alignItems: role === "user" ? "flex-end" : "flex-start",
                    padding: "10px 70px",
                    gap: "10px",
                }}
            >
                {messages.map((message, index) => (
                    <Box
                        key={index}
                        sx={{
                            // fontSize: "2vmin",
                            borderRadius: "8px",
                            lineHeight: "10px",
                            minWidth: "7%",
                            maxWidth: "55%",
                            padding: "20px",
                            color: "white",
                            background:
                                "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
                            backdropFilter: "blur(25px)",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            alignSelf:
                                message.role === "user"
                                    ? "flex-end"
                                    : "flex-start",
                        }}
                        ref={index === messages.length - 1 ? messageRef : null}
                    >
                        <Stack direction="column" spacing={2}>
                            <Typography
                                variant="p"
                                sx={{
                                    fontSize: "3vmin",
                                    color: "rgb(107 114 128 / 1)",
                                }}
                            >
                                {message.role === "user" ? "You" : "Sage"}
                            </Typography>
                            <Typography variant="p" lineHeight="20px">
                                {message.content}
                            </Typography>
                        </Stack>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
