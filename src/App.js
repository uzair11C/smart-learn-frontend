// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import Roadmaps from "./pages/Roadmaps";
import RolePrediction from "./pages/RolePrediction";
// import Campaign from "./pages/Campaign";
// import Login from "./pages/Login";

function App() {
    // const [user, setUser] = useState({});
    return (
        <div
            style={{
                backgroundColor: "#19192F",
                color: "#FFFFFF",
                width: "100vw",
                maxWidth: "100%",
            }}
        >
            <CssBaseline />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consultation" element={<Consultation />} />
                <Route path="/role-prediction" element={<RolePrediction />} />
                <Route path="/roadmaps" element={<Roadmaps />} />
            </Routes>
        </div>
    );
}

export default App;
