// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Campaign from "./pages/Campaign";
// import Login from "./pages/Login";

function App() {
    // const [user, setUser] = useState({});
    return (
        <>
            <CssBaseline />
            <NavBar />
            <Routes>
                {/* <Route path="/" element={user.id ? <Home /> : <Login />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/campaign/:campaign_id" element={<Campaign />} />
            </Routes>
        </>
    );
}

export default App;
