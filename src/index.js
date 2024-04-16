import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConsultantDashboard from "./ConsultantDashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <ConsultantDashboard />,
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
        <ConsultantDashboard />
    </RouterProvider>
);
