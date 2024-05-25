import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";
import App from "./App";
import AnalysisResult from "./components/RolePredictionComponents/AnalysisResult";
import RoadmapResult from "./pages/RoadmapResult";
import { UserProvider } from "./Contexts/useUser";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/consultation/chat",
    element: <Chat />,
  },
  {
    path: "/resume-analysis/analysis",
    element: <AnalysisResult />,
  },
  {
    path: "/roadmaps/:name",
    element: <RoadmapResult />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </UserProvider>
);
