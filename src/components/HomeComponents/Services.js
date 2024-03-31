import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

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

            {/* consultation */}
            <Box
                sx={{
                    width: { xs: " 100% ", md: "70%" },
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
                    <Typography variant="h4" component="h4" fontWeight="bold">
                        Consultation:
                    </Typography>
                    <Typography variant="h6" component="p">
                        Embark on a transformative career journey with our
                        Consultation Module! Immerse yourself in personalized
                        sessions led by expert advisors, where tailored
                        strategies and insights shape your unique path to
                        professional excellence. Seize the opportunity to ignite
                        your success story and redefine your professional
                        narrative!
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
                    >
                        Go to Consultation
                    </Button>
                </Box>
            </Box>

            {/* Prediction */}
            <Box
                sx={{
                    width: { xs: " 100% ", md: "70%" },
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
                    <Typography variant="h4" component="h4" fontWeight="bold">
                        Role Prediction:
                    </Typography>
                    <Typography variant="h6" component="p">
                        Embark on a personalized career exploration journey with
                        our Role Prediction Module! Simply upload your CV, and
                        our advanced analysis will unveil a tailored spectrum of
                        roles in the dynamic software industry. Whether it's
                        crafting code as a Front-end Enthusiast or orchestrating
                        systems as a DevOps Virtuoso, discover the perfect match
                        for your unique skills and aspirations.
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
                            navigate("/role-prediction");
                        }}
                    >
                        Go to Prediction
                    </Button>
                </Box>
            </Box>

            {/* Roadmaps */}
            <Box
                sx={{
                    width: { xs: " 100% ", md: "70%" },
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
                    <Typography variant="h4" component="h4" fontWeight="bold">
                        Roadmaps:
                    </Typography>
                    <Typography variant="h6" component="p">
                        Embark on a guided journey to success with our curated
                        Roadmaps module! Uncover the path to mastery in the
                        ever-evolving IT industry. From foundational skills to
                        advanced frameworks, our interactive roadmaps pave the
                        way for your career ascent. Explore the routes to
                        becoming a Frontend Developer, Backend Guru, or a
                        Full-Stack Maestro. Your career adventure starts here!
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
                    >
                        Go to Roadmaps
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Services;
