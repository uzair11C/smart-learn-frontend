import React from "react";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const MobileNav = ({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) => {
    return (
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon fontSize="large" />
            </IconButton>
            <img
                src="/images/SmartLearn_Logo.png"
                alt="logo"
                style={{
                    marginLeft: "10px",
                    display: { xs: "flex", md: "none" },
                }}
                width="170"
                height="50"
            />
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                    ".MuiPaper-root": {
                        background:
                            "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
                        backdropFilter: "blur(25px)",
                        borderRadius: "8px",
                        width: "45vw",
                    },
                }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            display: "block",
                            margin: "10px",
                            textDecoration: "none",
                        }}
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "#FFFFFF",
                            }}
                            to="/"
                        >
                            Home
                        </Link>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            display: "block",
                            margin: "10px",
                            textDecoration: "none",
                        }}
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "#FFFFFF",
                            }}
                            to="/"
                        >
                            Services
                        </Link>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            display: "block",
                            margin: "10px",
                            textDecoration: "none",
                        }}
                    >
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "#FFFFFF",
                            }}
                            to="/profile"
                        >
                            Profile
                        </Link>
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default MobileNav;
