import React from "react";
import Banner from "../components/Banner";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
    const navigate = useNavigate();

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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        border: "2px solid #F219A1",
                        borderRadius: "10px",
                        padding: "20px",
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(5px)",
                    }}
                >
                    <Typography variant="h4" sx={{ color: "#F219A1" }}>
                        Ready to get personalized advice?
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Our AI assistant is here to help you with your career
                        decisions. Chat with us now!
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/consultation/chat")}
                        sx={{
                            textTransform: "none",
                            borderRadius: "5px",
                            padding: "10px 30px",
                            fontSize: "3vmin",
                            background:
                                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                        }}
                    >
                        Chat Now
                    </Button>
                </Box>
                {/* <Button
                    variant="contained"
                    onClick={() => navigate("/consultation/chat")}
                    sx={{
                        textTransform: "none",
                        borderRadius: "5px",
                        padding: "0.5% 3%",
                        fontSize: "3vmin",
                        background:
                            "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                    }}
                >
                    Chat
                </Button> */}
            </Box>
        </>
    );
};

export default Consultation;
