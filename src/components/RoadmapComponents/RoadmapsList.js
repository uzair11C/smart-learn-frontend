import React from "react";
import { Box, Typography } from "@mui/material";

const RoadmapsList = () => {
    return (
        <Box
            sx={{
                p: { xs: "10px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <Typography variant="h2" component="h2" sx={{ fontSize: "9vmin" }}>
                Our Latest Roadmaps for IT Industry
            </Typography>

            <Box sx={{ width: "85%", background: "red", p: "15px" }}>
                Section for roadmaps
            </Box>
        </Box>
    );
};

export default RoadmapsList;
