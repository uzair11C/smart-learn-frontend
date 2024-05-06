import React from "react";
import Banner from "../components/Banner";
import { Box, Typography } from "@mui/material";

const Consultation = () => {
    return (
        <>
            <Banner
                title="Consultation"
                imageUrl="/images/talking to robot.webp"
            />

            <Box
                sx={{
                    width: "100%",
                    maxWidth: "100%",
                    p: { xs: "25px", md: "40px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "30px",
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{ fontSize: "9vmin" }}
                >
                    Chat with our AI
                </Typography>
            </Box>
        </>
    );
};

export default Consultation;
