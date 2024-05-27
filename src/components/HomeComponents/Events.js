import {
    Box,
    CircularProgress,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import CardComponent from "../CardComponent";
import { Link } from "react-router-dom";

const Events = ({ events, error }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", md: "30%" },
                position: { xs: null, lg: "sticky" },
                top: 120,
            }}
        >
            <CardComponent
                borderRadius="12px"
                padding="5%"
                minWidth="35%"
                maxWidth="100%"
                minHeight="50%"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontSize="6vmin"
                    sx={{ width: "100%" }}
                >
                    Upcoming Events:
                </Typography>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    width="100%"
                    divider={
                        <Divider
                            orientation="horizontal"
                            flexItem
                            sx={{ background: "rgba(255,255,255,0.5)" }}
                        />
                    }
                    spacing={2}
                    sx={{ mt: "15px" }}
                >
                    {events ? (
                        events.map((softEvent) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    gap: "5px",
                                }}
                                key={softEvent.title}
                            >
                                <Typography
                                    variant="h6"
                                    component="p"
                                    fontWeight="bold"
                                    fontSize="4vmin"
                                >
                                    {softEvent.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    fontSize="2.5vmin"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    {softEvent.date.when && softEvent.date.when}{" "}
                                    2024
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    fontSize="2.5vmin"
                                >
                                    {softEvent.address &&
                                        softEvent.address.join(", ")}
                                </Typography>
                                <Link
                                    to={softEvent.link}
                                    target="_blank"
                                    style={{
                                        color: "#E717AF",
                                        wordBreak: "break-word",
                                    }}
                                    fontSize="2.5vmin"
                                >
                                    {softEvent.link}
                                </Link>
                            </Box>
                        ))
                    ) : (
                        <>
                            {error ? null : (
                                <CircularProgress
                                    color="secondary"
                                    size={70}
                                    thickness={5}
                                />
                            )}
                        </>
                    )}
                </Stack>
            </CardComponent>
        </Box>
    );
};

export default Events;
