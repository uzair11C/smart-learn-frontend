import React from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Box, List, ListItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import useRoutes from "../../hooks/useRoutes";
import { SidebarOption } from "./SidebarOption";

export const Sidebar = ({ children }) => {
    const theme = useTheme();
    const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const routes = useRoutes();
    return (
        <Box
            sx={{
                height: "100%",
                backgroundColor: "#06061D",
                color: "#FFFFFF",
            }}
        >
            {/* Sidebar Options */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: { lg: "5rem" },
                    display: { lg: "block", xs: "none" },
                }}
            >
                <nav
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: lgScreen ? "50px" : "none",
                    }}
                >
                    <img
                        src="/images/SmartLearn_Logo.png"
                        alt="logo"
                        width={300}
                        height="auto"
                    />
                    {/* Home, Schedule, Messages, Settings */}
                    <List
                        disablePadding
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                            margin: "3.5rem 0",
                        }}
                    >
                        {routes.map((item) => (
                            <SidebarOption
                                key={item.label}
                                href={item.href}
                                label={item.label}
                                active={item.active}
                                icon={item.icon}
                            />
                        ))}
                    </List>
                    {/* Log Out */}
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: "capitalize",
                            transition: "opacity 0.3s",
                            background:
                                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                            ":hover": {
                                opacity: "0.8",
                            },
                        }}
                    >
                        Log Out
                    </Button>
                </nav>
            </Box>
            {/* Responsive Sidebar */}
            <Box
                sx={{
                    position: "fixed",
                    width: "100%",
                    bottom: 0,
                    zIndex: 40,
                    display: { lg: "none", xs: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "2px solid ",
                }}
            >
                {routes.map((route) => {
                    const Icon = route.icon;
                    return (
                        <ListItem
                            disablePadding
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                padding: route.active ? "10px" : "1rem",
                                border: route.active
                                    ? "1px solid rgba(255,255,255, 0.3)"
                                    : "transparent",
                                transition: "opacity 0.3s",
                                borderRadius: "9999px",
                                backdropFilter: "blur(25px)",
                                background: route.active
                                    ? "url('/public/images/Card.png'), linear-gradient(-253.09deg, rgba(217, 217, 217, 0.15) 50.53%, rgba(217, 217, 217, 0) 100.04%)"
                                    : "",
                                cursor: "pointer",
                                ":hover": {
                                    opacity: route.active ? "1" : "0.5",
                                },
                            }}
                        >
                            <Icon style={{ width: "2rem", height: "2rem" }} />
                        </ListItem>
                    );
                })}
            </Box>
            <Box sx={{ paddingLeft: { lg: "1rem" } }}>{children}</Box>
        </Box>
    );
};
