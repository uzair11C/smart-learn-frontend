import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import Roadmaps from "./pages/Roadmaps";
import RolePrediction from "./pages/RolePrediction";
// import Result from "./pages/Result";
// import { PredictionContext } from "./Contexts/PredictionContext";

function App() {
  // const [prediction, setPrediction] = useState({
  //     majorRole: "",
  //     otherRole1: "",
  //     otherRole2: "",
  // });
  return (
    // <PredictionContext.Provider value={[prediction, setPrediction]}>
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
        {/* <Route
                    path="/role-prediction/prediction"
                    element={<Result />}
                /> */}
        <Route path="/roadmaps" element={<Roadmaps />} />
      </Routes>
    </div>
    // </PredictionContext.Provider>
  );
}

export default App;
