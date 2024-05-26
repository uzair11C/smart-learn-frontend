import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = ({ title, catchprase, imageUrl }) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                background: `url('${imageUrl}')`,
                backgroundSize: { xs: "cover", md: "100% 100%" },
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                }}
            />
            <Typography
                variant="h2"
                component="h2"
                fontWeight="bold"
                fontSize="14vmin"
                textAlign="center"
                fontFamily="Raleway"
                sx={{
                    lineHeight: "5rem",
                    textShadow: "8px 12px 4px rgba(0, 0, 0, 0.4)",
                    position: "absolute",
                    top: "45%",
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="h4"
                component="h4"
                textAlign="center"
                fontSize="6vmin"
                sx={{
                    mt: "25px",
                    position: "absolute",
                    top: "55%",
                }}
            >
                <i>{catchprase && catchprase}</i>
            </Typography>
        </Box>
    );
};

export default Banner;
