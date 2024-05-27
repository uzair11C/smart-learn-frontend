import React, { useState } from "react";
import Banner from "../components/Banner";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { useUser } from "../Contexts/useUser";
import CustomModal from "../components/CustomModal";

const Consultation = () => {
    const [open, setOpen] = useState(false);
    const [shouldLogin, setShouldLogin] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const { user } = useUser();

    const LoginCheck = () => {
        user && user.id ? navigate("/consultation/chat") : DisplayDialog();
    };

    const DisplayDialog = () => {
        setShouldLogin(true);
        setOpen(true);
        setTitle("Login Required!");
        setContent(
            "You need to be logged in to be able to access this feature."
        );
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Banner
                title="Consultation"
                imageUrl="/images/talking to robot.jpg"
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
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "40px",
                        border: "2px solid #F219A1",
                        borderRadius: "10px",
                        width: "70%",
                        p: "25px 60px",
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(5px)",
                    }}
                >
                    <img src="/images/Sage.png" alt="sage" width="250" />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "20px",
                        }}
                    >
                        <Typography variant="p" component="p" fontSize="4vmin">
                            Need personalized advice? Our AI assistant,{" "}
                            <strong>The Career Sage</strong>, is here to help
                            you with your career decisions. Chat with us now!
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={LoginCheck}
                            sx={{
                                textTransform: "none",
                                borderRadius: "5px",
                                padding: "10px 30px",
                                fontSize: "3vmin",
                                background:
                                    "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                            }}
                            endIcon={<EastIcon sx={{ fontSize: 50 }} />}
                        >
                            Chat with Him Now
                        </Button>
                    </Box>
                </Box>
                <CustomModal
                    open={open}
                    title={title}
                    content={content}
                    login={shouldLogin}
                    handleClose={handleClose}
                />
            </Box>
        </>
    );
};

export default Consultation;
