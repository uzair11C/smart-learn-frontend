import React from "react";
import Banner from "../components/Banner";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();

  return (
    <>
      <Banner title="Consultation" imageUrl="/images/talking to robot.webp" />

      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          p: { xs: "25px", md: "40px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Typography variant="h2" component="h2" sx={{ fontSize: "9vmin" }}>
          Chat with our AI
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/consultation/chat")}
          sx={{
            borderRadius: "12px",
            padding: { md: "15px 20px", xs: "10px 10px" },
            background:
              "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
          }}
        >
          Chat
        </Button>
      </Box>
    </>
  );
};

export default Consultation;
