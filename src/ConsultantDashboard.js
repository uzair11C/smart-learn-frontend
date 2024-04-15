// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
// import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard";
// import Campaign from "./pages/Campaign";
// import Login from "./pages/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Conversations from "./pages/Conversations";
import Schedule from "./pages/Schedule";
import Chat from "./pages/Chat";

function ConsultantDashboard() {
  const theme = createTheme({
    typography: {
      h4: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      subtitle1: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      h1: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      h2: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      h3: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      h5: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      h6: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      button: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
      body1: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
      },
    },
  });

  // const [user, setUser] = useState({});
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#19192F",
          color: "#FFFFFF",
        }}
      >
        <CssBaseline />
        {/* <NavBar /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/conversations/chat" element={<Chat />} />
          <Route path="/schedule" element={<Schedule />} />
          {/* <Route path="/" element={user.id ? <Home /> : <Login />} /> */}
          {/* <Route path="/campaign/:campaign_id" element={<Campaign />} /> */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default ConsultantDashboard;
