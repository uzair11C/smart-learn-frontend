import React, { useState, useRef, useEffect } from "react";
import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Result from "./Result";
import axios from "axios";
import pdfToText from "react-pdftotext";
import CustomModal from "../CustomModal";

const UploadCV = () => {
    const [parsedFile, setParsedFile] = useState("");
    const [prediction, setPrediction] = useState({});
    const [background, setBackground] = useState("rgba(0,0,0,0.0)");
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const resultRef = useRef(null); // Reference to the result component

    const handleFileSelect = (event) => {
        event.preventDefault();
        if (event.target.files[0].type !== "application/pdf") {
            setTitle("Invalid File Type");
            setContent(
                "We currently only accept .pdf files, please upload a valid pdf file."
            );
            setOpen2(true);
        } else {
            extractText(event.target.files[0]);
            console.log("File info: ", event.target.files);
            console.log("Uploaded File: ", parsedFile);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setBackground("rgba(0,0,0,0.4)");
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.files[0].type !== "application/pdf") {
            setTitle("Invalid File Type");
            setContent(
                "We currently only accept .pdf files, please upload a valid pdf file."
            );
            setOpen2(true);
            setBackground("rgba(0,0,0,0.0)");
        } else {
            console.log("Uploaded File: ", event.dataTransfer.files[0]);
            extractText(event.dataTransfer.files[0]);
            setBackground("rgba(0,0,0,0.0)");
        }
    };

    const extractText = (file) => {
        pdfToText(file)
            .then((text) => setParsedFile(text))
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
        try {
            setOpen(true);
            const data = await axios.post("http://localhost:5000/api/roadmap", {
                role: "user",
                content: `Tell me my role in software industry based on my skills; 
            here's my resume: ${parsedFile}
            Your reply should be like so, 
          with major role and secondary role separated by a slash, 
          nothing more than that, no extra text, omit the text in brackets:
          Predicted Role: devops engineer(major role, closer to my skills)/
          system engineer(another role, close to my skills)/
          network(another role,close to my skills)
          `,
            });

            const response = data.data;
            setPrediction(extractRoles(response.content));
            console.log(response);
        } catch (error) {
            console.log(error);
            setTitle("Error!");
            setContent(
                `Something went wrong, please try again later.
                \nError: ${error.message}
                `
            );
            setOpen(false);
            setOpen2(true);
        }
    };

    const handleClose = () => {
        setOpen2(false);
    };

    useEffect(() => {
        if (prediction.majorRole && resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    }, [prediction]);

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
            <Typography variant="h2" component="h2" sx={{ fontSize: "8vmin" }}>
                Get Prediction for your future from our AI
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
                    {parsedFile && parsedFile.length > 0 ? (
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
                        <>
                            <Typography variant="h4" component="h4">
                                Select or drop your resume here
                            </Typography>
                            <img src="/images/Upload.png" alt="drag-here" />
                        </>
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
                            {parsedFile && parsedFile.length > 0
                                ? null
                                : `No File Chosen`}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {prediction && prediction.majorRole ? (
                <>
                    {/* <div ref={resultRef}></div> */}
                    <Result
                        majorRole={prediction.majorRole}
                        otherRole1={prediction.otherRole2}
                        otherRole2={prediction.otherRole1}
                        resultRef={resultRef}
                    />
                </>
            ) : null}
            <Backdrop open={open}>
                <CircularProgress color="secondary" size={120} thickness={5} />
            </Backdrop>
            <CustomModal
                open={open2}
                title={title}
                content={content}
                handleClose={handleClose}
            />
        </Box>
    );
};

export default UploadCV;
