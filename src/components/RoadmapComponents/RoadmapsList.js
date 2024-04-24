import React from "react";
import { Box, TextField, Typography } from "@mui/material";

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
                AI Generated Roadmaps
            </Typography>

            <Box
                sx={{
                    width: "85%",
                    p: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "stretch",
                }}
            >
                <Typography variant="h5" textAlign="center">
                    Our AI will generate upto date roadmaps for the year 2024,
                    just search for them here
                </Typography>
                <TextField
                    id="email"
                    label="Search for a roadmap"
                    variant="outlined"
                    type="text"
                    sx={{
                        mt: "20px",
                        ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(255,255,255,0.3)",
                            borderRadius: "8px",
                        },
                        // ".MuiOutlinedInput-root": {
                        //     background: "#222141",
                        // },
                    }}
                    InputLabelProps={{
                        style: { color: "rgba(255,255,255,0.3)" },
                    }}
                    inputProps={{
                        style: {
                            color: "#FFFFFF",
                        },
                    }}
                    InputProps={{
                        style: {
                            // "&.hover": {
                            //     borderColor: "rgba(255,255,255,0.3)",
                            //     borderRadius: "8px",
                            // },
                            background: "#222141",
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default RoadmapsList;
