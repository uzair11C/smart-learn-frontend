import React from "react";
import { Box, Typography, Button } from "@mui/material";

const UploadCV = () => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100%",
                p: { xs: "25px", md: "45px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
            }}
        >
            <Typography variant="h2" component="h2" sx={{ fontSize: "9vmin" }}>
                Upload Your Resume
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
                    <Typography variant="h4" component="h4">
                        Select or drop your resume here
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "30px",
                            width: "35%",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                background:
                                    "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                borderRadius: "8px",
                                fontSize: "20px",
                                pl: "30px",
                                pr: "30px",
                                width: "60%",
                            }}
                        >
                            Choose File
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                background:
                                    "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                borderRadius: "8px",
                                fontSize: "20px",
                                pl: "30px",
                                pr: "30px",
                                width: "60%",
                            }}
                        >
                            Upload
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default UploadCV;
