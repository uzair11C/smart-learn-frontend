import {
    Box,
    CircularProgress,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackIosNew } from "@mui/icons-material";
import JobAnalysis from "./JobAnalysis";
import axios from "axios";
import { useEffect, useState } from "react";
import JobsListing from "./JobsListing";
import CustomModal from "../CustomModal";

const AnalysisResult = () => {
    const [analysis, setAnalysis] = useState(null);
    const [jobs, setJobs] = useState(null);

    const [open2, setOpen2] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const isSmallScreen = window.innerWidth < 600;

    const handleClose = () => {
        setOpen2(false);
    };

    const prediction = useLocation().state;

    const ListJobs = async () => {
        try {
            const data = await axios.get(
                `https://jsearch.p.rapidapi.com/search?query=${prediction.majorRole}%20in%20Pakistan&page=1&num_pages=1`,
                {
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_JOBS_API_KEY,
                        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                    },
                }
            );

            const response = data.data;
            console.log("jobs: ", response.data);
            setJobs(response.data);
        } catch (error) {
            console.log(error);
            setTitle("Error!");
            setContent(
                `Something went wrong, please try again later.
                \nError: ${error.message}
                `
            );
            setOpen2(true);
        }
    };

    const GetAnalysis = async () => {
        try {
            const data = await axios.post(
                "https://smart-learn-smart-learn-463c5cef.koyeb.app/api/ai",
                {
                    role: "user",
                    content: `Generate a job analysis report for 
            ${prediction.majorRole} in the software industry. 
            Return the result in JSON format with the following structure, 
            no other extra text, no code or formatting, just json:

            {
              "demand": "the demand for the entered job",
              "keySkillsAndTechnologies": list all possible skills and technologies used as an array,
              "jobOpportunities": list all possible job oppurtunities as an array,
              "salariesOffered": "salary range in pkr, like Rs. 40,000 - 50,000, no other text"
            }`,
                }
            );

            const response = data.data;
            console.log(JSON.parse(response.content));
            setAnalysis(JSON.parse(response.content));

            await ListJobs();
        } catch (error) {
            console.log(error);
            setTitle("Error!");
            setContent(
                `Something went wrong, please try again later.
                \nError: ${error.message}
                `
            );
            setOpen2(true);
        }
    };

    useEffect(() => {
        GetAnalysis();
    }, []);

    const navigate = useNavigate();
    return (
        <Box
            // ref={resultRef}
            sx={{
                width: "100%",
                backgroundColor: "#19192F",
                color: "#FFFFFF",
                maxWidth: "100%",
                minHeight: "105vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    pt: "20px",
                }}
            >
                <IconButton
                    sx={{
                        color: "#FFFFFF",
                        ml: "50px",
                        borderRadius: "12px",
                    }}
                    onClick={() => {
                        navigate("/resume-analysis", { replace: true });
                    }}
                >
                    <ArrowBackIosNew
                        sx={{
                            width: { lg: "50px", xs: "30px" },
                            height: { lg: "50px", xs: "30px" },
                        }}
                    />
                    <Typography variant="h4" component="p">
                        Back
                    </Typography>
                </IconButton>
            </Box>
            <Typography
                variant="h2"
                component="h2"
                sx={{ fontSize: { xs: "9vmin", md: "8vmin" } }}
            >
                Your Predicted Role
            </Typography>
            <Box
                sx={{
                    background:
                        "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                    borderRadius: "12px",
                    p: "2px",
                }}
            >
                <Box
                    width="70vw"
                    sx={{
                        background: "#19192F",
                        p: "30px",
                        borderRadius: "12px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <Stack direction="row" spacing={5} alignItems="center">
                        <img
                            src="/images/Arrow.png"
                            width={isSmallScreen ? "50" : "100"}
                            height={isSmallScreen ? "50" : "100"}
                            alt="drag-here"
                        />
                        <Typography
                            variant="h2"
                            component="p"
                            fontSize={isSmallScreen ? "7vmin" : "9vmin"}
                            textAlign="center"
                            sx={{ fontWeight: "800" }}
                        >
                            {prediction && prediction.majorRole}
                        </Typography>
                        <img
                            src="/images/Arrow1.png"
                            width={isSmallScreen ? "50" : "100"}
                            height={isSmallScreen ? "50" : "100"}
                            alt="drag-here"
                        />
                    </Stack>

                    <Stack direction="row" alignItems="center">
                        <Stack spacing={2}>
                            <Typography
                                variant="h5"
                                component="p"
                                fontSize="5.5vmin"
                            >
                                {prediction && prediction.otherRole1}
                            </Typography>
                            <Typography
                                variant="h5"
                                component="p"
                                fontSize="5.5vmin"
                            >
                                {prediction && prediction.otherRole2}
                            </Typography>
                        </Stack>
                        <img
                            src="/images/Brackets.png"
                            width={isSmallScreen ? "100" : "130"}
                            height={isSmallScreen ? "200" : "240"}
                            alt="drag-here"
                        />

                        <Typography variant="h4" component="h4">
                            Other Roles
                        </Typography>
                    </Stack>
                </Box>
            </Box>
            {analysis ? (
                <JobAnalysis
                    majorRole={prediction.majorRole}
                    JobAnalysis={analysis}
                />
            ) : (
                <CircularProgress color="secondary" size={70} thickness={5} />
            )}
            {jobs ? (
                <>
                    {jobs.length > 0 ? (
                        <JobsListing
                            majorRole={prediction.majorRole}
                            jobs={jobs}
                        />
                    ) : (
                        <Typography
                            variant="h5"
                            fontSize="6vmin"
                            fontWeight="bold"
                            sx={{ mb: "20px" }}
                        >
                            No jobs available for this role
                        </Typography>
                    )}
                </>
            ) : (
                <CircularProgress color="secondary" size={70} thickness={5} />
            )}
            <CustomModal
                open={open2}
                title={title}
                content={content}
                handleClose={handleClose}
            />
        </Box>
    );
};

export default AnalysisResult;
