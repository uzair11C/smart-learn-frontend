import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Conversations from "./pages/Conversations";
import Chat from "./pages/Chat";
import Schedule from "./pages/Schedule";
// import SmartLearn from "./SmartLearn";

const theme = createTheme({
    typography: {
        h4: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
        subtitle1: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
        h1: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
        h2: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
        h3: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
        h5: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
        h6: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
        button: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
        body1: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
        },
    },
});

const router = createBrowserRouter([
    {
        path: "*",
        element: <App />,
    },
    {
        path: "/dashboard",
        element: (
            <ThemeProvider theme={theme}>
                <Dashboard />
            </ThemeProvider>
        ),
    },
    {
        path: "/conversations",
        element: (
            <ThemeProvider theme={theme}>
                <Conversations />,
            </ThemeProvider>
        ),
    },
    {
        path: "/conversations/chat",
        element: (
            <ThemeProvider theme={theme}>
                <Chat />,
            </ThemeProvider>
        ),
    },
    {
        path: "/schedule",
        element: (
            <ThemeProvider theme={theme}>
                <Schedule />,
            </ThemeProvider>
        ),
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
