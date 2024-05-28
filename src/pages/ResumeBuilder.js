import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ResumeBuilder = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        p: { xs: "10px", md: "50px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Typography variant="h2" component="h2" sx={{ fontSize: "9vmin" }}>
          Build Your Own Resume
        </Typography>

        <Box
          sx={{
            pr: "50px",
            // display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="p"
            variant="body1"
            sx={{ fontSize: "2.5vmin" }}
          >
            Level up your resume with this professional resume example. This
            resume sample will help you unleash the full potential of your
            career.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: "20px",
              textTransform: "none",
              background:
                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
              borderRadius: "8px",
              fontSize: "20px",
              padding: "10px 35px",
            }}
          >
            <Link
              to="/resume-create"
              style={{ textDecoration: "none", color: "white" }}
            >
              Create
            </Link>
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: { sm: "none", md: "block" },
          pt: { md: "100px", lg: "90px" },
        }}
      >
        <img
          src="/images/software-resume.png"
          alt="resume"
          width="380"
          height="538"
        />
      </Box>
    </Box>
  );
};

export default ResumeBuilder;
