import React, { useRef, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomModal from "../CustomModal";

const RoadmapsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open2, setOpen2] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isSmallScreen = window.innerWidth < 600;

  const navigate = useNavigate();

  const resultRef = useRef(null); // Reference to the result component

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value); // Update the state variable with the input field value
  };

  const GetRoadmap = () => {
    if (searchTerm === "") {
      setTitle("Input Required!");
      setContent(
        "Search cannot be empty! Type some text to generate a roadmap",
      );
      setOpen2(true);
    } else {
      navigate(`/roadmaps/${searchTerm}`);
    }
  };

  const handleClose = () => {
    setOpen2(false);
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
      <Typography
        variant="h2"
        component="h2"
        textAlign="center"
        sx={{
          fontSize: "9vmin",
          width: "100%",
          mt: { xs: "20px", md: 0 },
        }}
      >
        AI Generated Roadmaps
      </Typography>

      <Box
        sx={{
          width: { xs: "100%", md: "85%" },
          p: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" textAlign="center" sx={{ width: "100%" }}>
          Discover current roadmaps tailored to 2024. Simply search for them
          here.
        </Typography>
        <div ref={resultRef} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
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
            size={isSmallScreen ? "small" : "medium"}
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
              borderRadius: { xs: "5px", md: "8px" },
              fontSize: { sx: "4vmin", md: "3vmin" },
              padding: { sx: "10px 25px", md: "10px 35px" },
            }}
            onClick={GetRoadmap}
            // onClick={() => }
          >
            Generate
          </Button>
        </Box>
        {/* {loading ? (
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
                )} */}
      </Box>
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
