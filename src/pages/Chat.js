import React, { useState } from "react";

import { Header } from "../components/Conversation/Header";
import { Body } from "../components/Conversation/Body";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import CustomModal from "../components/CustomModal";

const Chat = () => {
    var messages = JSON.parse(localStorage.getItem("messages"));

    const [value, setValue] = useState("");
    const [status, setStatus] = useState("active");
    const [limit, setLimit] = useState(messages.length);
    const [open, setOpen] = useState(true);

    var message = {
        role: "user",
        content: "",
    };

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = async (e) => {
        if (value === "") {
            window.alert(
                "Please type something if you wanna chat with our bot!"
            );
        } else {
            if (limit === 30) {
                window.alert("Context Limit Reached!");
            } else {
                e.preventDefault();
                setStatus("typing");
                message = {
                    role: "user",
                    content: value,
                };

                if (messages) {
                    messages.push(message);
                    console.log(
                        "New messages ,writing to local storage: ",
                        messages
                    );
                    localStorage.setItem("messages", JSON.stringify(messages));
                } else {
                    messages = [
                        {
                            role: "system",
                            content: `You are a career guiding bot, 
                            identified as Career Sage, 
                            focused on queries related to careers 
                            in the software/IT industry. 
                            Politely decline any other queries.
                            To any query other than career guidance in 
                            IT/software industry, you will say: I am sorry,
                            I only talk about careers in IT industry. Is there
                            anything else I can help you with?
                            `,
                        },
                    ];
                    messages.push(message);
                    console.log(
                        "Nothing in local storage, writing messages: ",
                        messages
                    );
                    localStorage.setItem("messages", JSON.stringify(messages));
                }
                setValue("");

                const data = await axios.post(
                    "http://localhost:5000/api/chat",
                    {
                        messages,
                    }
                );
                const response = await data.data;
                console.log(response);
                messages.push(response);
                localStorage.setItem("messages", JSON.stringify(messages));
                setStatus("active");
                // setLimit(limit + 1);
            }
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                maxWidth: "100%",
                backgroundColor: "#19192F",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
            }}
        >
            <Header status={status} limit={limit} />
            <Body messages={messages} />

            {/* Form */}
            <Box
                sx={{
                    padding: "35px",
                    borderTopWidth: "1px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <form
                    onSubmit={handleClick}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            width: "80%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                        }}
                    >
                        <TextField
                            id="email"
                            label="Search for a roadmap"
                            variant="outlined"
                            type="text"
                            onChange={handleInputChange}
                            value={value}
                            sx={{
                                // mt: "20px",
                                flex: 1,
                                ".MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgba(255,255,255,0.3)",
                                    borderRadius: "8px",
                                },
                            }}
                            InputLabelProps={{
                                style: { color: "rgba(255,255,255,0.3)" },
                            }}
                            inputProps={{
                                style: {
                                    color: "#FFFFFF",
                                },
                            }}
                            InputProps={{
                                style: {
                                    background: "#222141",
                                },
                            }}
                        />
                    </div>
                    <Button
                        // onClick={handleClick}
                        type="submit"
                        variant="contained"
                        style={{
                            borderRadius: "12px",
                            padding: "15px 20px",
                            background:
                                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                        }}
                    >
                        <SendIcon style={{ width: "30px", height: "30px" }} />
                    </Button>
                </form>
            </Box>
            <CustomModal open={open} handleClose={handleClose} title="Error" />
        </Box>
    );
};

export default Chat;
