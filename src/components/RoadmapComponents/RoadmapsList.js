import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Tree from "react-d3-tree";

const RoadmapsList = () => {
    const roadmapJson = {
        name: "React Learning Roadmap",
        children: [
            {
                name: "Foundations",
                children: [
                    {
                        name: "HTML",
                        children: [
                            {
                                name: "Basic HTML Structure",
                            },
                            {
                                name: "HTML Semantics",
                            },
                        ],
                    },
                    {
                        name: "CSS",
                        children: [
                            {
                                name: "Basic Styling",
                            },
                            {
                                name: "CSS Flexbox",
                            },
                            {
                                name: "CSS Grid",
                            },
                            {
                                name: "Responsive Design",
                            },
                        ],
                    },
                    {
                        name: "JavaScript",
                        children: [
                            {
                                name: "Basic Syntax",
                            },
                            {
                                name: "Functions",
                            },
                            {
                                name: "Arrays & Objects",
                            },
                            {
                                name: "DOM Manipulation",
                            },
                            {
                                name: "ES6+ Features",
                            },
                        ],
                    },
                ],
            },
            {
                name: "React Basics",
                children: [
                    {
                        name: "Introduction to React",
                    },
                    {
                        name: "JSX",
                    },
                    {
                        name: "Components",
                        children: [
                            {
                                name: "Functional Components",
                            },
                            {
                                name: "Class Components",
                            },
                        ],
                    },
                    {
                        name: "Props & State",
                    },
                    {
                        name: "Lifecycle Methods",
                    },
                    {
                        name: "Event Handling",
                    },
                ],
            },
            {
                name: "Intermediate React",
                children: [
                    {
                        name: "Forms & Validation",
                    },
                    {
                        name: "Component Composition",
                    },
                    {
                        name: "React Router",
                    },
                    {
                        name: "State Management",
                        children: [
                            {
                                name: "Context API",
                            },
                            {
                                name: "Redux",
                            },
                        ],
                    },
                    {
                        name: "Hooks",
                        children: [
                            {
                                name: "useState",
                            },
                            {
                                name: "useEffect",
                            },
                            {
                                name: "useContext",
                            },
                            {
                                name: "Custom Hooks",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Advanced React",
                children: [
                    {
                        name: "Server-Side Rendering (SSR)",
                    },
                    {
                        name: "GraphQL with React",
                    },
                    {
                        name: "Testing React Apps",
                        children: [
                            {
                                name: "Unit Testing",
                            },
                            {
                                name: "Integration Testing",
                            },
                            {
                                name: "End-to-End Testing",
                            },
                        ],
                    },
                    {
                        name: "Performance Optimization",
                    },
                    {
                        name: "Deploying React Apps",
                    },
                ],
            },
        ],
    };
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
                </Box>
            </Box>
        </Box>
    );
};

export default RoadmapsList;
