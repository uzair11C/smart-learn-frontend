import React, { useEffect, useRef, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Tree from "react-d3-tree";
import axios from "axios";
import CustomModal from "../CustomModal";
import CustomLoader from "../CustomLoader";

const RoadmapsList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [roadmapJson, setRoadmapJson] = useState(null);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const resultRef = useRef(null); // Reference to the result component

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value); // Update the state variable with the input field value
    };

    const GetRoadmap = async () => {
        if (searchTerm !== "") {
            try {
                setOpen(true);
                setLoading(true); // Set loading to true before making the API call

                console.log(loading);
                const data = await axios.post(
                    "http://localhost:5000/api/roadmap",
                    {
                        role: "user",
                        content: `Generate a dynamic roadmap in JSON format. The roadmap 
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
                // console.log(roadmap.content);
                console.log(roadmapJson);
            } catch (error) {
                setTitle("Error!");
                setContent(
                    `Something went wrong, please search again. Error: ${error.message}`
                );
                setOpen(false);
                setOpen2(true);
            }
        } else {
            setTitle("Input Required!");
            setContent(
                "Search cannot be empty! Type some text to generate a roadmap"
            );
            setOpen2(true);
        }
    };

    const handleClose = () => {
        setOpen2(false);
    };

    useEffect(() => {
        // Scroll to the result component when it's shown
        if (roadmapJson && resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    }, [roadmapJson]);

    return (
        <Box
            sx={{
                p: { xs: "10px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <Typography variant="h2" component="h2" sx={{ fontSize: "9vmin" }}>
                AI Generated Roadmaps
            </Typography>

            <Box
                sx={{
                    width: "85%",
                    p: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5" textAlign="center">
                    Discover current roadmaps tailored to 2024. Simply search
                    for them here.
                </Typography>
                <div ref={resultRef} />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        // justifyContent: "space-between",
                        alignItems: "center",
                        gap: "20px",
                        width: "80%",
                        mt: "20px",
                    }}
                >
                    <TextField
                        id="email"
                        label="Search for a roadmap"
                        variant="outlined"
                        type="text"
                        onChange={handleInputChange}
                        value={searchTerm}
                        sx={{
                            // mt: "20px",
                            flex: 1,
                            ".MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(255,255,255,0.3)",
                                borderRadius: "8px",
                            },
                        }}
                        InputLabelProps={{
                            style: { color: "rgba(255,255,255,0.3)" },
                        }}
                        inputProps={{
                            style: {
                                color: "#FFFFFF",
                            },
                        }}
                        InputProps={{
                            style: {
                                background: "#222141",
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            background:
                                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                            borderRadius: "8px",
                            fontSize: "20px",
                            padding: "10px 35px",
                        }}
                        onClick={GetRoadmap}
                    >
                        Generate
                    </Button>
                </Box>
                {loading ? (
                    ""
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                            height: "80vh",
                            background: "#FFFFFF",
                            mt: "50px",
                            borderRadius: "17px",
                            overflow: "hidden",
                            border: "3px solid #F219A1",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h3"
                            fontSize="7vmin"
                            mt="30px"
                            color="black"
                        >
                            {searchTerm.charAt(0).toUpperCase() +
                                searchTerm.slice(1)}{" "}
                            Roadmap
                        </Typography>
                        <Tree
                            data={roadmapJson}
                            rootNodeClassName="node__root"
                            branchNodeClassName="node__branch"
                            leafNodeClassName="node__leaf"
                            separation={{ siblings: 2, nonSiblings: 2 }}
                            nodeSize={{ x: 350, y: 100 }}
                            orientation="vertical"
                            depthFactor={550}
                            collapsible={false}
                            translate={{ x: 600, y: 50 }}
                        />
                    </Box>
                )}
            </Box>
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

export default RoadmapsList;
