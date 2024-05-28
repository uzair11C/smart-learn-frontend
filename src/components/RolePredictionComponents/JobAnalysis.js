import { Box, Typography } from "@mui/material";
import React from "react";

const JobAnalysis = ({ majorRole, JobAnalysis }) => {
    return (
        <Box
            sx={{
                width: "75%",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            <Typography
                variant="h2"
                component="h3"
                textAlign="center"
                fontWeight="bold"
                fontSize="8vmin"
                sx={{ mb: "20px" }}
            >
                Job Analysis for {majorRole}
            </Typography>

            <Box>
                <Typography
                    variant="h4"
                    component="h3"
                    fontWeight="bold"
                    fontSize="5.5vmin"
                    sx={{ textDecoration: "underline" }}
                >
                    Demand:
                </Typography>
                <Typography variant="h6" fontSize="4.5vmin">
                    {JobAnalysis && JobAnalysis.demand}
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="h4"
                    component="h3"
                    fontWeight="bold"
                    fontSize="5.5vmin"
                    sx={{ textDecoration: "underline" }}
                >
                    Key Skills and Technologies:
                </Typography>
                <Typography variant="h6" fontSize="4.5vmin">
                    {JobAnalysis &&
                        JobAnalysis.keySkillsAndTechnologies.join(", ")}
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="h4"
                    component="h3"
                    fontWeight="bold"
                    fontSize="5.5vmin"
                    sx={{ textDecoration: "underline" }}
                >
                    Job opportunities:
                </Typography>
                <Typography variant="h6" fontSize="5vmin">
                    {JobAnalysis && JobAnalysis.jobOpportunities.join(", ")}
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="h4"
                    component="h3"
                    fontWeight="bold"
                    fontSize="5.5vmin"
                    sx={{ textDecoration: "underline" }}
                >
                    Salaries Offered:
                </Typography>
                <Typography variant="h6" fontSize="4.5vmin">
                    {JobAnalysis && JobAnalysis.salariesOffered} /-
                </Typography>
            </Box>
        </Box>
    );
};

export default JobAnalysis;
