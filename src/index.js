import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";
import App from "./App";
import Result from "./components/RolePredictionComponents/Result";

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
        path: "/analysis",
        element: <Result />,
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
