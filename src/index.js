import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConsultantDashboard from "./ConsultantDashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <ConsultantDashboard />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router}>
        <ConsultantDashboard />
    </RouterProvider>
);
