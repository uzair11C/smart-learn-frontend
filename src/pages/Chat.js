import React, { useEffect, useState } from "react";

import { Header } from "../components/Conversation/Header";
import { Body } from "../components/Conversation/Body";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import CustomModal from "../components/CustomModal";
import { useUser } from "../Contexts/useUser";
import { useNavigate } from "react-router-dom";

const Chat = () => {
    const { storeMessages, user } = useUser();

    const [value, setValue] = useState("");
    const [status, setStatus] = useState("active");
    const [refresh, setRefresh] = useState(false);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [userMessages, setUserMessages] = useState([
        {
            role: "system",
            content:
                "You are a career guiding bot, identified as Career Sage, focused on queries related to careers and educationin the software/IT industry. Politely decline any other queries.To any query other than career guidance in IT/software industry, you will say: I am sorry,I only talk about careers in IT industry. Is thereanything else I can help you with?",
        },
        ...((user && user.user_metadata.messages) || []),
    ]);
    const [limit, setLimit] = useState(0);

    // const [limit, setLimit] = useState(
    //     userMessages.length !== 0
    //         ? userMessages.filter((message) => message.role === "assistant")
    //               .length
    //         : 0
    // );
    // const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setLimit(
            userMessages &&
                userMessages.filter((message) => message.role === "assistant")
                    .length
        );
    }, [userMessages]);

    useEffect(() => {
        console.log("current logged in user: ", user);
        console.log(userMessages);
        if (user && !user?.id) {
            navigate("/login");
        }
    }, []);

    var message = {
        role: "user",
        content: "",
    };

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (value === "") {
            setRefresh(false);
            setOpen(true);
            setTitle("Input Required");
            setContent("Please type something if you wanna chat with our bot!");
        } else {
            // one extra message, because one is system message
            if (limit === 100) {
                setRefresh(true);
                setOpen(true);
                setTitle("Limit Reached!");
                setContent(
                    "Your limit has Reached for this section, refresh if you want to contine."
                );
            } else {
                setRefresh(false);
                setStatus("typing");
                message = {
                    role: "user",
                    content: value,
                };
                // messages.push(message);

                setValue("");
                const newArray = [...userMessages, message];
                setUserMessages(newArray);
                setLoading(true);
                const data = await axios.post(
                    "https://smart-learn-smart-learn-463c5cef.koyeb.app/api/chat",
                    {
                        messages: newArray,
                    }
                );
                setLoading(false);
                const response = await data.data;
                setUserMessages([...newArray, response]);
                console.log("response: ", response);
                console.log("userMessages", userMessages);
                setStatus("Active");
                setLimit(
                    userMessages
                        ? userMessages.filter(
                              (message) => message.role === "assistant"
                          ).length
                        : limit + 1
                );
                storeMessages(userMessages);
            }
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    // React.useEffect(() => {
    //     console.log("user updated");
    //     const messages = [
    //         {
    //             role: "system",
    //             content:
    //                 "You are a career guiding bot, identified as Career Sage, focused on queries related to careers and educationin the software/IT industry. Politely decline any other queries.To any query other than career guidance in IT/software industry, you will say: I am sorry,I only talk about careers in IT industry. Is thereanything else I can help you with?",
    //         },
    //         ...((user && user.user_metadata.messages) || []),
    //     ];
    //     setUserMessages(messages);
    // }, [user]);

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
            <Header
                status={status}
                limit={limit}
                storeMessages={storeMessages}
            />
            <Body
                status={status}
                loading={loading}
                userMessages={userMessages}
            />
            {/* Form */}
            <Box
                sx={{
                    padding: "15px 65px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleClick(e);
                    }}
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
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                        }}
                    >
                        <TextField
                            id="email"
                            multiline
                            maxRows={2}
                            label="Search for a roadmap"
                            variant="outlined"
                            type="text"
                            onChange={handleInputChange}
                            value={value}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    // e.preventDefault(); // Prevent default behavior (like new line in multiline TextField)
                                    handleClick(e); // Call handleClick function
                                }
                            }}
                            sx={{
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
                        type="submit"
                        variant="contained"
                        // onSubmit={handleClick}
                        sx={{
                            borderRadius: "12px",
                            padding: { md: "15px 20px", xs: "10px 10px" },
                            background:
                                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                        }}
                    >
                        <SendIcon style={{ width: "30px", height: "30px" }} />
                    </Button>
                </form>
            </Box>
            <CustomModal
                open={open}
                title={title}
                content={content}
                refresh={refresh}
                handleClose={handleClose}
                storeMessages={storeMessages}
            />
        </Box>
    );
};

export default Chat;
