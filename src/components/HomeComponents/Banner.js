import React from "react";
import { Container, Box, Typography } from "@mui/material";

const Banner = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                width: "100vw",
                height: "100vh",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    background: "url('/images/background.png')",
                    backgroundSize: { xs: "cover", md: "100% 100%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    fontWeight="bold"
                    fontSize="98px"
                    fontFamily="Raleway"
                    sx={{
                        lineHeight: "115px",
                        textShadow: "8px 12px 4px rgba(0, 0, 0, 0.4)",
                    }}
                >
                    SMART LEARN
                </Typography>
                <Typography variant="h4" component="h4">
                    <i>Made by students for students</i>
                </Typography>
            </Box>
        </Container>
    );
};

export default Banner;
