import React from "react";
import {
    Box,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Button,
    // Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const MobileNav = ({
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
    user,
    logout,
    navigate,
}) => {
    const handleLogin = () => {
        user && user.id ? logout() : navigate("/login");
    };
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
                        width: "50vw",
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
                            to="/roadmaps"
                        >
                            Roadmaps
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
                            to="/resume-analysis"
                        >
                            Resume Analysis
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
                            to="/consultation"
                        >
                            Consultation
                        </Link>
                    </Typography>
                </MenuItem>

                <MenuItem>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            background:
                                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                            borderRadius: "7px",
                            fontSize: "17px",
                            pl: "30px",
                            pr: "30px",
                            width: "100%",
                        }}
                        onClick={() => {
                            handleCloseNavMenu();
                            handleLogin();
                        }}
                    >
                        Logout
                    </Button>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default MobileNav;
