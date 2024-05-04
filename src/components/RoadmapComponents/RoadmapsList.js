import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Tree from "react-d3-tree";
import axios from "axios";

const RoadmapsList = () => {
    const [loading, setLoading] = useState(true);
    const [roadmap, setRoadmap] = useState("");
    const [roadmapJson, setRoadmapJson] = useState(null);

    const GetRoadmap = async () => {
        setLoading(true); // Set loading to true before making the API call

        console.log(loading);
        const data = await axios.post("http://localhost:5000/api/roadmap", {
            role: "user",
            content: `Generate a dynamic roadmap in JSON format. The roadmap 
            should be structured as a tree, with each node representing a role or 
            task within the website development process.

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

         generate a JSON structure that represents the learning roadmap for React. 
         organize the stages/phases hierarchically as a tree. Only generate the json,
         no other extra text, do not write json and do not format the json to code`,
        });

        const roadmap = await data.data;
        setRoadmap(JSON.parse(roadmap.content));
        setLoading(false);
        console.log(roadmap.content);
        console.log(JSON.parse(roadmap.content));
    };

    useEffect(() => {
        setRoadmapJson(roadmap ? JSON.parse(roadmap) : null); // Parse roadmap only if it's not null
    }, [roadmap]);

    // const roadmapJson = {
    //     name: "React Learning Roadmap",
    //     children: [
    //         {
    //             name: "Foundations",
    //             children: [
    //                 {
    //                     name: "HTML",
    //                     children: [
    //                         {
    //                             name: "Basic HTML Structure",
    //                         },
    //                         {
    //                             name: "HTML Semantics",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     name: "CSS",
    //                     children: [
    //                         {
    //                             name: "Basic Styling",
    //                         },
    //                         {
    //                             name: "CSS Flexbox",
    //                         },
    //                         {
    //                             name: "CSS Grid",
    //                         },
    //                         {
    //                             name: "Responsive Design",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     name: "JavaScript",
    //                     children: [
    //                         {
    //                             name: "Basic Syntax",
    //                         },
    //                         {
    //                             name: "Functions",
    //                         },
    //                         {
    //                             name: "Arrays & Objects",
    //                         },
    //                         {
    //                             name: "DOM Manipulation",
    //                         },
    //                         {
    //                             name: "ES6+ Features",
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             name: "React Basics",
    //             children: [
    //                 {
    //                     name: "Introduction to React",
    //                 },
    //                 {
    //                     name: "JSX",
    //                 },
    //                 {
    //                     name: "Components",
    //                     children: [
    //                         {
    //                             name: "Functional Components",
    //                         },
    //                         {
    //                             name: "Class Components",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     name: "Props & State",
    //                 },
    //                 {
    //                     name: "Lifecycle Methods",
    //                 },
    //                 {
    //                     name: "Event Handling",
    //                 },
    //             ],
    //         },
    //         {
    //             name: "Intermediate React",
    //             children: [
    //                 {
    //                     name: "Forms & Validation",
    //                 },
    //                 {
    //                     name: "Component Composition",
    //                 },
    //                 {
    //                     name: "React Router",
    //                 },
    //                 {
    //                     name: "State Management",
    //                     children: [
    //                         {
    //                             name: "Context API",
    //                         },
    //                         {
    //                             name: "Redux",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     name: "Hooks",
    //                     children: [
    //                         {
    //                             name: "useState",
    //                         },
    //                         {
    //                             name: "useEffect",
    //                         },
    //                         {
    //                             name: "useContext",
    //                         },
    //                         {
    //                             name: "Custom Hooks",
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             name: "Advanced React",
    //             children: [
    //                 {
    //                     name: "Server-Side Rendering (SSR)",
    //                 },
    //                 {
    //                     name: "GraphQL with React",
    //                 },
    //                 {
    //                     name: "Testing React Apps",
    //                     children: [
    //                         {
    //                             name: "Unit Testing",
    //                         },
    //                         {
    //                             name: "Integration Testing",
    //                         },
    //                         {
    //                             name: "End-to-End Testing",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     name: "Performance Optimization",
    //                 },
    //                 {
    //                     name: "Deploying React Apps",
    //                 },
    //             ],
    //         },
    //     ],
    // };
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
                        Search
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "70vh",
                        background: "#FFFFFF",
                        mt: "50px",
                    }}
                >
                    {loading ? (
                        ""
                    ) : (
                        <Tree
                            data={roadmapJson}
                            rootNodeClassName="node__root"
                            branchNodeClassName="node__branch"
                            leafNodeClassName="node__leaf"
                            separation={{ siblings: 1, nonSiblings: 1.5 }}
                            nodeSize={{ x: 350, y: 100 }}
                            orientation="vertical"
                            depthFactor={550}
                            collapsible={false}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default RoadmapsList;
