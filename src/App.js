import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import Roadmaps from "./pages/Roadmaps";
import RolePrediction from "./pages/RolePrediction";
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {
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
                <Route path="/resume-analysis" element={<RolePrediction />} />
                <Route path="/roadmaps" element={<Roadmaps />} />
                <Route path="/resume-builder" element={<ResumeBuilder />} />
            </Routes>
        </div>
    );
}

export default App;
