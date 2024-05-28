import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import axios from "axios";
import CustomLoader from "../components/CustomLoader";
import CustomModal from "../components/CustomModal";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBackIosNew } from "@mui/icons-material";
import LearningResources from "../components/RoadmapComponents/LearningResources";

const RoadmapResult = () => {
    const [loading, setLoading] = useState(true);
    const [roadmapJson, setRoadmapJson] = useState(null);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [orientation, setOrientation] = useState("vertical");

    const navigate = useNavigate();

    const params = useParams();
    const searchTerm = params.name;

    const GetRoadmap = async () => {
        try {
            setOpen(true);
            setLoading(true); // Set loading to true before making the API call

            console.log(loading);
            const data = await axios.post(
                "https://smart-learn-smart-learn-463c5cef.koyeb.app/api/ai",
                {
                    role: "user",
                    content: `Generate a detailed dynamic roadmap in JSON format. The roadmap
                should be structured as a tree, with each node representing a role or
                task within the process.

            The JSON format should follow the example below:

            const orgChart = {
              name: 'CEO',
              children: [
                {
                  name: 'Manager',
                  attributes: {
                    department: 'Production',
                  },
                  children: [
                    {
                      name: 'Foreman',
                      attributes: {
                        department: 'Fabrication',
                      },
                      children: [
                        {
                          name: 'Worker',
                        },
                      ],
                    },
                    {
                      name: 'Foreman',
                      attributes: {
                        department: 'Assembly',
                      },
                      children: [
                        {
                          name: 'Worker',
                        },
                      ],
                    },
                  ],
                },
              ],
            };

             generate a JSON structure that represents the learning roadmap for ${searchTerm}.
             organize the stages/phases hierarchically as a tree. Only generate the json,
             no other extra text, do not write json and do not format the json to code`,
                }
            );

            const roadmap = await data.data;
            setRoadmapJson(JSON.parse(roadmap.content));
            setLoading(false);
            setOpen(false);
            console.log(roadmapJson);
        } catch (error) {
            setTitle("Error!");
            setContent(
                `Something went wrong, please search again. Error: ${error.message}`
            );
            setOpen(false);
            setOpen2(true);
        }
    };

    const handleClose = () => {
        setOpen2(false);
    };

    useEffect(() => {
        GetRoadmap();
    }, []);

    return (
        <Box
            sx={{
                width: "100vw",
                backgroundColor: "#19192F",
                color: "#FFFFFF",
                maxWidth: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    pt: "10px",
                }}
            >
                <IconButton
                    sx={{
                        color: "#FFFFFF",
                        ml: "50px",
                        borderRadius: "12px",
                    }}
                    onClick={() => {
                        navigate("/roadmaps", { replace: true });
                    }}
                >
                    <ArrowBackIosNew
                        sx={{
                            width: { lg: "50px", xs: "30px" },
                            height: { lg: "50px", xs: "30px" },
                        }}
                    />
                    <Typography variant="h4" component="p">
                        Back
                    </Typography>
                </IconButton>
            </Box>
            <Typography variant="h3" fontSize="8vmin" color="#FFFFFF">
                {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}{" "}
                Roadmap
            </Typography>
            {loading ? (
                ""
            ) : (
                <>
                    <Box
                        sx={{
                            width: "90%",
                            height: "80vh",
                            background: "#FFFFFF",
                            mt: "20px",
                            borderRadius: "17px",
                            overflow: "hidden",
                            border: "3px solid #F219A1",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            mb: "20px",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                alignSelf: "flex-end",
                                mt: 5,
                                mr: 5,
                                textTransform: "none",
                                fontSize: "3vmin",
                                fontWeight: "bold",
                            }}
                            onClick={() =>
                                orientation === "vertical"
                                    ? setOrientation("horizontal")
                                    : setOrientation("vertical")
                            }
                        >
                            Toggle Orientation
                        </Button>
                        <Tree
                            data={roadmapJson}
                            rootNodeClassName="node__root"
                            branchNodeClassName="node__branch"
                            leafNodeClassName="node__leaf"
                            separation={{ siblings: 2, nonSiblings: 2 }}
                            nodeSize={{ x: 350, y: 100 }}
                            orientation={orientation}
                            depthFactor={550}
                            collapsible={false}
                            translate={{ x: 600, y: 50 }}
                        />
                    </Box>
                    <LearningResources
                        roadmapJson={roadmapJson}
                        roadmap={searchTerm}
                    />
                </>
            )}
            <CustomLoader open={open} />
            <CustomModal
                open={open2}
                title={title}
                content={content}
                handleClose={handleClose}
            />
        </Box>
    );
};

export default RoadmapResult;
