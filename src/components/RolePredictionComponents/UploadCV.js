import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Result from "./Result";
import axios from "axios";
import pdfToText from "react-pdftotext";

const UploadCV = () => {
    const [file, setFile] = useState("");
    const [parsedFile, setParsedFile] = useState([]);
    const [prediction, setPrediction] = useState({});
    const [background, setBackground] = useState("rgba(0,0,0,0.0)");

    const handleFileSelect = (event) => {
        event.preventDefault();
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setParsedFile(extractText(file));
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
        setParsedFile(extractText(file));
        setBackground("rgba(0,0,0,0.0)");
    };

    const extractText = (file) => {
        pdfToText(file)
            .then((text) => {
                console.log(text);
                setFile(text);
                return text;
            })
            .catch((error) =>
                console.error("Failed to extract text from pdf", error)
            );
    };

    function extractRoles(input) {
        const rolesRegex =
            /Predicted Role:\s*(.*?)\/(.*?)\/(.*?)(?:\s\(Developer\)|$)/;
        const match = input.match(rolesRegex);
        if (match) {
            return {
                majorRole: match[1].trim(),
                otherRole1: match[2].trim(),
                otherRole2: match[3].trim(),
            };
        } else {
            return {};
        }
    }

    const GetPrediction = async () => {
        const data = await axios.post("http://localhost:5000/api/roadmap", {
            role: "user",
            content: `Tell me my role in software industry based on my skills; 
            here's my resume: ${parsedFile}`,
        });

        const response = data.data;
        setPrediction(extractRoles(response.content));
        console.log(response);
    };

    // useEffect(() => {

    // }, [third])

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
                    onDragLeave={() => {
                        setBackground("rgba:(0,0,0,0.0)");
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            width: "100%",
                            height: "100%",
                            background: background,
                            borderRadius: "12px",
                            pointerEvents: "none",
                        }}
                    />
                    {file.name && file.name ? (
                        ""
                    ) : (
                        <Typography variant="h4" component="h4">
                            Select or drop your resume here
                        </Typography>
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
                    {file.name && file.name ? (
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                fontSize: "4vmin",
                                fontWeight: "bold",
                                padding: "10px 30px",
                                color: "#FFFFFF",
                                backgroundColor: "#F219A1",
                                borderRadius: "12px",
                                "&:hover": {
                                    backgroundColor: "#AD0CF8",
                                },
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "15px",
                            }}
                            onClick={GetPrediction}
                        >
                            <CloudUploadIcon fontSize="large" /> Get Prediction
                        </Button>
                    ) : (
                        <img src="/images/Upload.png" alt="drag-here" />
                    )}
                </Box>
            </Box>
            {prediction && prediction.majorRole ? (
                <Result
                    majorRole={prediction.majorRole}
                    otherRole1={prediction.otherRole1}
                    otherRole2={prediction.otherRole2}
                />
            ) : null}
        </Box>
    );
};

export default UploadCV;
