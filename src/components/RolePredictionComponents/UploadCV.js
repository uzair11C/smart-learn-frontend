import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const UploadCV = () => {
    const [file, setFile] = useState([]);
    const [background, setBackground] = useState("rgba(0,0,0,0.0)");

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        console.log("File info: ", event.target.files);
        console.log("Uploaded File: ", selectedFile);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setBackground("rgba(0,0,0,0.4)");
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        setFile(droppedFile);
        setBackground("rgba(0,0,0,0.0)");
    };

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
                        position: "relative",
                    }}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            // top: "50%",
                            // right: "50%",
                            // bottom: "50%",
                            top: 0,
                            width: "100%",
                            height: "100%",
                            background: background,
                            borderRadius: "12px",
                            pointerEvents: "none",
                        }}
                    />
                    <Typography variant="h4" component="h4">
                        Select or drop your resume here
                    </Typography>
                    {file.name && file.name ? (
                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                // background:
                                //     "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                borderRadius: "12px",
                                fontSize: "5vmin",
                                padding: "10px 35px",
                                fontWeight: "bold",
                                color: "#FFFFFF",
                            }}
                        >
                            Get Prediction
                        </Button>
                    ) : (
                        <img src="/images/Upload.png" alt="drag-here" />
                    )}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "30px",
                            width: "100%",
                        }}
                    >
                        <label
                            htmlFor="browse"
                            style={{
                                textTransform: "none",
                                background:
                                    "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                borderRadius: "8px",
                                fontSize: "20px",
                                padding: "10px 35px",
                                cursor: "pointer",
                            }}
                        >
                            <input
                                type="file"
                                hidden
                                id="browse"
                                accept=".pdf,.docx,.odt,.txt"
                                onChange={handleFileSelect}
                                // multiple
                            />
                            Choose File
                        </label>
                        <Typography variant="p" component="p">
                            {file.name ? file.name : `No File Chosen`}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default UploadCV;
