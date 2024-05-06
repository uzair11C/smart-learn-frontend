import React from "react";

import { Header } from "../components/Conversation/Header";
import { Form } from "../components/Conversation/Form";
import { Body } from "../components/Conversation/Body";
import { Box } from "@mui/material";

const Chat = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#19192F",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <Body />
        <Form />
      </Box>
    </Box>
  );
};

export default Chat;
