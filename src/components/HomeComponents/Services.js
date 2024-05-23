import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Stack,
    Divider,
    CircularProgress,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import CardComponent from "../CardComponent";
import axios from "axios";
import CustomModal from "../CustomModal";

const Services = () => {
    const [events, setEvents] = useState(null);

    const [open2, setOpen2] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const handleClose = () => {
        setOpen2(false);
    };

    const GetEvents = async () => {
        try {
            const data = await axios.get(
                `https://serpapi.com/search?engine=google_events&q=Software+events+and+conferences+in+Pakistan&hl=en&gl=pk&api_key=${process.env.REACT_APP_SERP_API_KEY}`
            );
            const response = await data.data;

            setEvents(response.events_results);
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
        GetEvents();
    }, []);

    return (
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
            <Typography variant="h2" component="h2" sx={{ fontSize: "11vmin" }}>
                Our Services
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "30px",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30%",
                        position: "sticky",
                        top: 120,
                    }}
                >
                    <CardComponent
                        borderRadius="12px"
                        padding="5%"
                        minWidth="35%"
                        maxWidth="100%"
                        minHeight="50%"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{ width: "100%" }}
                        >
                            Upcoming Events:
                        </Typography>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            divider={
                                <Divider
                                    orientation="horizontal"
                                    flexItem
                                    sx={{ background: "rgba(255,255,255,0.5)" }}
                                />
                            }
                            spacing={2}
                            sx={{ mt: "15px" }}
                        >
                            {events ? (
                                events.map((softEvent) => (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "flex-start",
                                            gap: "5px",
                                        }}
                                        key={softEvent.title}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="p"
                                            fontWeight="bold"
                                        >
                                            {softEvent.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            component="p"
                                        >
                                            {softEvent.date.when &&
                                                softEvent.date.when}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            {softEvent.address &&
                                                softEvent.address.join(", ")}
                                        </Typography>
                                        <Link
                                            to={softEvent.link}
                                            target="_blank"
                                            style={{ color: "#E717AF" }}
                                        >
                                            {softEvent.link}
                                        </Link>
                                    </Box>
                                ))
                            ) : (
                                <CircularProgress
                                    color="secondary"
                                    size={70}
                                    thickness={5}
                                />
                            )}
                        </Stack>
                    </CardComponent>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "70%",
                    }}
                >
                    {/* consultation */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "center",
                            alignItems: "flex-start",
                            mt: "20px",
                            gap: "30px",
                        }}
                    >
                        <img
                            src="/images/consultation.png"
                            alt="consultation"
                            width="100%"
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
                    </Box>
                    {/* Prediction */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row-reverse" },
                            justifyContent: "center",
                            alignItems: "flex-start",
                            mt: "20px",
                            gap: "30px",
                        }}
                    >
                        <img
                            src="/images/prediction.png"
                            alt="consultation"
                            width="100%"
                        />
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
                                Role Prediction:
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
                    </Box>
                    {/* Roadmaps */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "center",
                            alignItems: "flex-start",
                            mt: "20px",
                            gap: "30px",
                        }}
                    >
                        <img
                            src="/images/roadmaps.png"
                            alt="consultation"
                            width="100%%"
                        />
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
                                Embark on a guided journey to success with our
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
                    </Box>
                </Box>
            </Box>
            <CustomModal
                open={open2}
                title={title}
                content={content}
                handleClose={handleClose}
            />
        </Box>
    );
};

export default Services;
