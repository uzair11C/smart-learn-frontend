import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const UploadCV = () => {
  const [file, setFile] = useState([]);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    console.log("File info: ", event.target.files);
    console.log("Uploaded File: ", selectedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        p: { xs: "25px", md: "45px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Typography variant="h2" component="h2" sx={{ fontSize: "9vmin" }}>
        Upload Your Resume
      </Typography>

      <Box
        sx={{
          background:
            "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
          borderRadius: "12px",
          p: "2px",
        }}
      >
        <Box
          width="70vw"
          sx={{
            background: "#19192F",
            p: "30px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Typography variant="h4" component="h4">
            Select or drop your resume here
          </Typography>
          <img src="/images/Upload.png" alt="drag-here" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              width: "40%",
            }}
          >
            <label
              htmlFor="browse"
              style={{
                textTransform: "none",
                background:
                  "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                borderRadius: "8px",
                fontSize: "20px",
                padding: "10px 35px",
                cursor: "pointer",
              }}
            >
              <input
                type="file"
                hidden
                id="browse"
                accept=".pdf,.docx,.txt"
                onChange={handleFileSelect}
                // multiple
              />
              Choose File
            </label>
            {/* <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                background:
                                    "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                borderRadius: "8px",
                                fontSize: "20px",
                                pl: "30px",
                                pr: "30px",
                                // width: "60%",
                            }}
                        >
                            <input
                                type="file"
                                hidden
                                id="browse"
                                onChange={handleFileChange}
                                accept=".pdf,.docx,.txt"
                                // multiple
                                style={{
                                    textTransform: "none",
                                    background:
                                        "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                    borderRadius: "8px",
                                    fontSize: "20px",
                                    padding: "10px 30px",
                                    // pr: "30px",
                                    // width: "60%",
                                }}
                            />
                            Choose File
                        </Button> */}
            <Typography variant="p" component="p">
              {file.name ? file.name : `No File Chosen`}
            </Typography>
            {/* <p>{file ? file.name : "No File Chosen"}</p> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadCV;
