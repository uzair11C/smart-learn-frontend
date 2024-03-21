import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = ({ title, catchprase }) => {
    return (
        // <Container
        //     maxWidth="xl"
        //     sx={{
        //         width: "100vw",
        //         height: "100vh",
        //     }}
        // >
        <Box
            sx={{
                width: "100%",
                height: "100vh",
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
                fontSize="20vmin"
                textAlign="center"
                fontFamily="Raleway"
                sx={{
                    lineHeight: "115px",
                    textShadow: "8px 12px 4px rgba(0, 0, 0, 0.4)",
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="h4"
                component="h4"
                textAlign="center"
                sx={{ mt: "15px" }}
            >
                <i>{catchprase && catchprase}</i>
            </Typography>
        </Box>
        // </Container>
    );
};

export default Banner;
