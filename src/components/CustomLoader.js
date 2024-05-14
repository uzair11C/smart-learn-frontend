import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

const CustomLoader = ({ open }) => {
    const texts = [
        "Just a sec, our AI is untangling its virtual shoelaces.",
        "Wait a moment, our AI is channeling its inner zen master.",
        "Hold your horses, our AI is enjoying a virtual roller coaster ride!",
        "Hol' up, our AI is cookin'!",
        "Almost there, our AI is untangling its digital spaghetti.",
        "Hold tight, our AI is brewing up some magic!",
        "Hold onto your hats, our AI is riding the virtual roller coaster of creativity!",
        "Just a moment, our AI is solving the virtual Rubik's cube.",
        "Hold your breath, our AI is diving into the digital deep!",
        "Stay tuned, our AI is composing a digital symphony!",
    ];

    const [text, setText] = useState(Math.floor(Math.random() * texts.length));

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
        }, 5000);
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
                    top: "42%",
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
