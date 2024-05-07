import React, { useEffect, useState } from "react";

import { Header } from "../components/Conversation/Header";
import { Body } from "../components/Conversation/Body";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant" },
  ]);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState({});

  const handleInputChange = (e) => {
    // setValue(e.target.value);
    const newValue = e.target.value;
    setValue(newValue);
    setMessage({ role: "user", content: value });
  };

  console.log("Messages Array:", messages);

  const handleClick = async (e) => {
    e.preventDefault();
    // messages.push(message);
    setMessages([...messages, message]);

    const data = await axios.post("http://localhost:5000/api/chat", {
      messages,
    });
    const response = await data.data;
    console.log(response);
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
      <Header />
      <Body />

      {/* Form */}
      <Box
        sx={{
          padding: "20px",
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
            gap: "10px",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
    </Box>
  );
};

export default Chat;
