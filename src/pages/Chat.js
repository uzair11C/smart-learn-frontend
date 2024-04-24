import React from "react";

import { Header } from "../components/Conversation/Header";
import { Form } from "../components/Conversation/Form";
import { Body } from "../components/Conversation/Body";

const Chat = () => {
  return (
    <div
      style={{
        // paddingLeft: lgScreen ? "25rem" : "inherit",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#19192F",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Body />
        <Form />
      </div>
    </div>
  );
};

export default Chat;
