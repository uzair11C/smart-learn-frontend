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
        sx={{ mb: "20px" }}
      >
        Job Analysis for {majorRole}
      </Typography>

      <Box>
        <Typography
          variant="h4"
          component="h3"
          fontWeight="bold"
          sx={{ textDecoration: "underline" }}
        >
          Demand:
        </Typography>
        <Typography variant="h6">
          {JobAnalysis && JobAnalysis.demand}
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h4"
          component="h3"
          fontWeight="bold"
          sx={{ textDecoration: "underline" }}
        >
          Key Skills and Technologies:
        </Typography>
        <Typography variant="h6">
          {JobAnalysis && JobAnalysis.keySkillsAndTechnologies.join(", ")}
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h4"
          component="h3"
          fontWeight="bold"
          sx={{ textDecoration: "underline" }}
        >
          Job opportunities:
        </Typography>
        <Typography variant="h6">
          {JobAnalysis && JobAnalysis.jobOpportunities.join(", ")}
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h4"
          component="h3"
          fontWeight="bold"
          sx={{ textDecoration: "underline" }}
        >
          Salaries Offered:
        </Typography>
        <Typography variant="h6">
          {JobAnalysis && JobAnalysis.salariesOffered} /-
        </Typography>
      </Box>
    </Box>
  );
};

export default JobAnalysis;
