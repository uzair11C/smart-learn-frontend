import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CardComponent from "../CardComponent";

const JobsListing = ({ majorRole, jobs }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", md: "85%" },
                maxWidth: "100%",
            }}
        >
            <Box
                sx={{
                    width: "85%",
                    maxWidth: "100%",
                    p: "2%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h2"
                    component="h3"
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="9vmin"
                    sx={{ mb: "20px", width: "100%" }}
                >
                    Jobs for {majorRole}
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        p: "2%",
                    }}
                >
                    <Grid container spacing={3}>
                        {jobs &&
                            jobs.map((jobData) => (
                                <Grid item xs={12} key={jobData.job_id}>
                                    <CardComponent
                                        borderRadius="12px"
                                        padding="5%"
                                        minWidth="20%"
                                        maxWidth="50%"
                                        minHeight="50%"
                                        sx={{
                                            display: "flex",
                                            flexDirection: {
                                                xs: "column",
                                                md: "row",
                                            },
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "20px",
                                            transition: "transform 0.3s ease", // Add transition property
                                            ":hover": {
                                                transform: "scale(1.05)", // Scale up on hover
                                            },
                                        }}
                                    >
                                        <Avatar
                                            alt={jobData.employer_name}
                                            src={jobData.employer_logo}
                                            variant="rounded"
                                            sx={{
                                                width: 225,
                                                height: 225,
                                                borderRadius: "12px",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: {
                                                    xs: "stretch",
                                                    md: "flex-start",
                                                },
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                fontWeight="bold"
                                                fontSize="7vmin"
                                            >
                                                {jobData.job_title}
                                            </Typography>
                                            <Typography variant="h5">
                                                {jobData.employer_name}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                    maxHeight: "3.6em",
                                                    width: "90%",
                                                    mt: "10px",
                                                    mb: "20px",
                                                }}
                                            >
                                                {jobData.job_description}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    textTransform: "none",
                                                    background:
                                                        "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                                    borderRadius: "8px",
                                                    fontSize: "20px",
                                                    padding: "10px 30px",
                                                }}
                                                onClick={() =>
                                                    window.open(
                                                        jobData.job_apply_link,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                Apply Now
                                            </Button>
                                        </Box>
                                    </CardComponent>
                                </Grid>
                            ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default JobsListing;
