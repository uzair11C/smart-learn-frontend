import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";
// import CustomModal from "../CustomModal";
import Events from "./Events";

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds

const Services = () => {
    const [events, setEvents] = useState(null);

    // const [open2, setOpen2] = useState(false);
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    // const handleClose = () => {
    //     setOpen2(false);
    // };

    const GetEvents = async () => {
        const savedData = localStorage.getItem("apiData");
        const savedTimestamp = localStorage.getItem("timestamp");
        if (savedData && savedTimestamp) {
            const currentTime = Date.now();
            const timeDifference = currentTime - savedTimestamp;

            if (timeDifference < ONE_WEEK) {
                setEvents(JSON.parse(savedData));
                return;
            }
        }
        try {
            const data = await axios.get(
                `https://real-time-events-search.p.rapidapi.com/search-events?query=Software%20events%20in%20pakistan&is_virtual=false&start=0`,
                {
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_EVENTS_API_KEY,
                        "X-RapidAPI-Host":
                            "real-time-events-search.p.rapidapi.com",
                    },
                }
            );
            const response = await data.data;

            localStorage.setItem("apiData", JSON.stringify(response));
            localStorage.setItem("timestamp", Date.now());

            console.log("events: ", response);

            setEvents(response.data);
        } catch (error) {
            console.log(error.message);
            setError(true);
        }
    };

    useEffect(() => {
        GetEvents();
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100%",
                p: { xs: "25px", md: "50px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
            }}
        >
            <Typography variant="h2" component="h2" sx={{ fontSize: "11vmin" }}>
                Our Services
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "40px",
                    width: "100%",
                }}
            >
                <Events events={events} error={error} />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: { xs: "100%", md: "70%" },
                        gap: "30px",
                    }}
                >
                    {/* Buider */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "center",
                            alignItems: { xs: "center", md: "flex-start" },
                            mt: "20px",
                            gap: "30px",
                        }}
                    >
                        <img
                            src="/images/resumeBuilder.jpeg"
                            alt="builder"
                            width="40%"
                            style={{ borderRadius: "12px" }}
                        />
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                display: "flex",
                                height: "100%",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: "10px",
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h4"
                                fontWeight="bold"
                            >
                                Resume Builder:
                            </Typography>
                            <Typography variant="h6" component="p">
                                Streamline your path to employment success with
                                our dynamic Resume Builder feature! Easily input
                                your details and watch as they seamlessly
                                transform into a polished, professional resume
                                that captures your unique strengths and
                                experiences. Whether you're a seasoned pro or
                                just starting out, our user-friendly tool
                                ensures your resume shines brightly. Get ready
                                to make a lasting impression and kickstart your
                                career journey!
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    background:
                                        "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                    fontSize: "17px",
                                    borderRadius: "6px",
                                }}
                                onClick={() => {
                                    navigate("/resume-builder");
                                }}
                                endIcon={<EastIcon sx={{ fontSize: 50 }} />}
                            >
                                Go to Resume Builder
                            </Button>
                        </Box>
                    </Box>
                    {/* Roadmaps */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "center",
                            alignItems: { xs: "center", md: "flex-start" },
                            mt: "20px",
                            gap: "30px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: "10px",
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h4"
                                fontWeight="bold"
                            >
                                Roadmaps:
                            </Typography>
                            <Typography variant="h6" component="p">
                                Go on a guided journey to success with our
                                curated Roadmaps module! Uncover the path to
                                mastery in the ever-evolving IT industry. From
                                foundational skills to advanced frameworks, our
                                interactive roadmaps pave the way for your
                                career ascent. Explore the routes to becoming a
                                Frontend Developer, Backend Guru, or a
                                Full-Stack Maestro. Your career adventure starts
                                here!
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    background:
                                        "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                    fontSize: "17px",
                                    borderRadius: "6px",
                                }}
                                onClick={() => {
                                    navigate("/roadmaps");
                                }}
                                endIcon={<EastIcon sx={{ fontSize: 50 }} />}
                            >
                                Go to Roadmaps
                            </Button>
                        </Box>

                        <img
                            src="/images/roadmaps.png"
                            alt="consultation"
                            width="70%"
                        />
                    </Box>

                    {/* Prediction */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row-reverse" },
                            justifyContent: "center",
                            alignItems: { xs: "center", md: "flex-start" },
                            mt: "20px",
                            gap: "30px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: "10px",
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h4"
                                fontWeight="bold"
                            >
                                Resume Analysis:
                            </Typography>
                            <Typography variant="h6" component="p">
                                Embark on a personalized career exploration
                                journey with our Role Prediction Module! Simply
                                upload your CV, and our advanced analysis will
                                unveil a tailored spectrum of roles in the
                                dynamic software industry. Whether it's crafting
                                code as a Front-end Enthusiast or orchestrating
                                systems as a DevOps Virtuoso, discover the
                                perfect match for your unique skills and
                                aspirations.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    background:
                                        "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                    fontSize: "17px",
                                    borderRadius: "6px",
                                }}
                                onClick={() => {
                                    navigate("/resume-analysis");
                                }}
                                endIcon={<EastIcon sx={{ fontSize: 50 }} />}
                            >
                                Go to Prediction
                            </Button>
                        </Box>
                        <img
                            src="/images/rolePrediction.jpg"
                            alt="prediction"
                            width="40%"
                            style={{ borderRadius: "12px" }}
                        />
                    </Box>

                    {/* consultation */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "center",
                            alignItems: { xs: "center", md: "flex-start" },
                            mt: "20px",
                            gap: "30px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                display: "flex",
                                height: "100%",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: "10px",
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h4"
                                fontWeight="bold"
                            >
                                Consultation:
                            </Typography>
                            <Typography variant="h6" component="p">
                                Embark on a transformative career journey with
                                our Consultation Module! Immerse yourself in
                                personalized sessions led by expert advisors,
                                where tailored strategies and insights shape
                                your unique path to professional excellence.
                                Seize the opportunity to ignite your success
                                story and redefine your professional narrative!
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    background:
                                        "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                    fontSize: "17px",
                                    borderRadius: "6px",
                                }}
                                onClick={() => {
                                    navigate("/consultation");
                                }}
                                endIcon={<EastIcon sx={{ fontSize: 50 }} />}
                            >
                                Go to Consultation
                            </Button>
                        </Box>
                        <img
                            src="/images/talking to robot.jpg"
                            alt="consultation"
                            width="40%"
                            style={{ borderRadius: "12px" }}
                        />
                    </Box>
                </Box>
            </Box>
            {/* <CustomModal
                open={open2}
                title={title}
                content={content}
                handleClose={handleClose}
            /> */}
        </Box>
    );
};

export default Services;
