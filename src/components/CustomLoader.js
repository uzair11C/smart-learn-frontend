import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

const CustomLoader = ({ open }) => {
    const texts = [
        "Please wait, our AI is Working it's Magic!",
        "Our AI is working, please be patient",
        "Still loading, almost there!",
        "Hol' up, our AI is cookin'!",
    ];

    const [text, setText] = useState("Please wait, our is Working it's Magic!");

    function setRandomText() {
        const index = Math.floor(Math.random() * texts.length);
        let newText = texts[index];
        if (newText === text) {
            setRandomText();
        } else {
            setText(newText);
        }
        return;
    }

    useEffect(() => {
        setTimeout(() => {
            setRandomText();
        }, 4500);
    }, [text]);

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
