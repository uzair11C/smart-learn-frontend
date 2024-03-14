import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const DesktopNav = ({ handleCloseNavMenu }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <img
                src="/images/SmartLearn_Logo.png"
                alt="logo"
                style={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                }}
                width="200"
            />

            <Box
                sx={{
                    width: "70%",
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        pl: "10px",
                        pr: "30px",
                        height: "90px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "40px",
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h6"
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            display: "block",
                            margin: "10px",
                            textDecoration: "none",
                        }}
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                            to="/"
                        >
                            Home
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            display: "block",
                            margin: "10px",
                            textDecoration: "none",
                        }}
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                            to="/"
                        >
                            Services
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            display: "block",
                            margin: "10px",
                            textDecoration: "none",
                        }}
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                            to="/"
                        >
                            Profile
                        </Link>
                    </Typography>
                    <Button variant="contained">Logout</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default DesktopNav;
