import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import axios from "axios";

const LearningResources = ({ roadmapJson, roadmap }) => {
    const [videos, setVideos] = useState(null);

    const GetVideos = async () => {
        const data = await axios.get(
            `https://youtube-v2.p.rapidapi.com/search/?query=${roadmap}`,
            {
                headers: {
                    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
                    "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
                },
            }
        );

        const response = await data.data;

        if (response.videos) {
            setVideos(response.videos);
        } else {
            console.log("No videos found in the response");
        }
        console.log(response);
        console.log(videos);
    };

    useEffect(() => {
        GetVideos();
    }, [roadmapJson]);

    // console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "100%",
            }}
        >
            <Box
                sx={{
                    width: "85%",
                    maxWidth: "100%",
                    p: "2%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        width: "100%",
                    }}
                >
                    Learning Resources:
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        p: "2%",
                    }}
                >
                    <Grid container spacing={3}>
                        {videos &&
                            videos.map((video) => (
                                <Grid item xs={6} md={4}>
                                    <CardComponent
                                        borderRadius="12px"
                                        padding="5%"
                                        minWidth="20%"
                                        maxWidth="50%"
                                        height="90%"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            transition: "transform 0.3s ease", // Add transition property
                                            ":hover": {
                                                transform: "scale(1.05)", // Scale up on hover
                                            },
                                        }}
                                        key={video.video_id}
                                        OnClick={() => {
                                            window.open(
                                                `https://www.youtube.com/watch?v=${video.video_id}`,
                                                "_blank"
                                            );
                                        }}
                                    >
                                        <img
                                            src={
                                                video.thumbnails[1] &&
                                                video.thumbnails[1].url
                                            }
                                            alt="thumbnail"
                                            width={"100%"}
                                            style={{ borderRadius: "12px" }}
                                        />
                                        <Typography
                                            variant="h5"
                                            component="p"
                                            fontWeight="bold"
                                            sx={{
                                                mt: "15px",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                "-webkit-line-clamp": 2,
                                                "line-clamp": 2,
                                                "-webkit-box-orient":
                                                    "vertical",
                                            }}
                                        >
                                            {video.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            component="p"
                                            sx={{
                                                mt: "5px",
                                                color: "rgba(255,255,255,0.5)",
                                            }}
                                        >
                                            {video.author}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            component="p"
                                            sx={{
                                                color: "rgba(255,255,255,0.5)",
                                            }}
                                        >
                                            {video.published_time}
                                        </Typography>
                                    </CardComponent>
                                </Grid>
                            ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default LearningResources;
