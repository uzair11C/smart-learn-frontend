import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConsultantDashboard from "./ConsultantDashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Conversations from "./pages/Conversations";
import Chat from "./pages/Chat";
import Schedule from "./pages/Schedule";
// import SmartLearn from "./SmartLearn";

const router = createBrowserRouter([
    {
        path: "*",
        element: <App />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/conversations",
        element: <Conversations />,
    },
    {
        path: "/conversations/chat",
        element: <Chat />,
    },
    {
        path: "/schedule",
        element: <Schedule />,
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
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
