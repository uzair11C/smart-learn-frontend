import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackIosNew } from "@mui/icons-material";
import { PredictionContext } from "../../Contexts/PredictionContext";

const AnalysisResult = ({
    // prediction,
    resultRef,
}) => {
    const prediction = useLocation().state;

    console.log("Hello, prediction: ", prediction);

    const navigate = useNavigate();
    return (
        <Box
            // ref={resultRef}
            sx={{
                width: "100%",
                backgroundColor: "#19192F",
                color: "#FFFFFF",
                maxWidth: "100%",
                minHeight: "100vh",
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
                    // justifyContent: "center",
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
            <Typography variant="h2" component="h2" sx={{ fontSize: "8vmin" }}>
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
                            width="100"
                            height="100"
                            alt="drag-here"
                        />
                        <Typography
                            variant="h2"
                            component="p"
                            fontSize="10vmin"
                            sx={{ fontWeight: "900" }}
                        >
                            {prediction && prediction.majorRole}
                        </Typography>
                        <img
                            src="/images/Arrow1.png"
                            width="100"
                            height="100"
                            alt="drag-here"
                        />
                    </Stack>

                    <Stack direction="row" alignItems="center">
                        <Stack spacing={2}>
                            <Typography
                                variant="h5"
                                component="p"
                                fontSize="5vmin"
                            >
                                {prediction && prediction.otherRole2}
                            </Typography>
                            <Typography
                                variant="h5"
                                component="p"
                                fontSize="5vmin"
                            >
                                {prediction && prediction.otherRole1}
                            </Typography>
                        </Stack>
                        <img
                            src="/images/Brackets.png"
                            width="132"
                            height="241"
                            alt="drag-here"
                        />

                        <Typography variant="h4" component="h4">
                            Other Roles
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default AnalysisResult;
