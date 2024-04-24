import React from "react";
import App from "./App";
import ConsultantDashboard from "./ConsultantDashboard";
import { Routes } from "react-router-dom";

const SmartLearn = () => {
    return (
        <>
            <Routes>
                <App />
                <ConsultantDashboard />
            </Routes>
        </>
    );
};

export default SmartLearn;
