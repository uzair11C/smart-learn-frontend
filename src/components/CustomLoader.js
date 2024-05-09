import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

const CustomLoader = ({ open }) => {
    const texts = [
        "Please wait, our is Working it's Magic!",
        "Our AI is working, please be patient",
        "Still loading, almost there!",
        "Hol' up, our AI is cookin'!",
    ];

    const [text, setText] = useState("Please wait, our is Working it's Magic!");

    useEffect(() => {
        setTimeout(() => {
            setText(texts[Math.floor(Math.random() * 4)]);
        }, 2500);
    }, []);

    return (
        <Backdrop
            open={open}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: " 20px",
            }}
        >
            <CircularProgress
                color="secondary"
                size={130}
                thickness={5}
                sx={{ position: "relative" }}
            />
            <img
                src=" /images/sageHead.png"
                alt="sageHead"
                width="80"
                style={{
                    position: "absolute",
                    top: "41%",
                    // left: "50%",
                    // right: "50%",
                    bottom: "50%",
                }}
            />
            <Typography
                variant="body1"
                component="p"
                fontSize="4vmin"
                color="#d069d3"
            >
                {text}
            </Typography>
        </Backdrop>
    );
};

export default CustomLoader;
