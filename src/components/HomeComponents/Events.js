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
    function formatDate(dateString) {
        // Convert the string to a Date object
        const date = new Date(dateString);

        // Options for formatting the date
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
        };

        // Format the date
        const formattedDate = date.toLocaleString("en-US", options);

        return formattedDate;
    }

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
                                key={softEvent.event_id}
                            >
                                <Typography
                                    variant="h6"
                                    component="p"
                                    fontWeight="bold"
                                    fontSize="4vmin"
                                >
                                    {softEvent.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    fontSize="2.5vmin"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    {formatDate(softEvent.start_time)}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    fontSize="2.5vmin"
                                >
                                    {softEvent.venue && softEvent.venue.name}
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
