import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Result = () => {
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
        Your Predicted Role
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
        >
          <Stack direction="row" spacing={5} alignItems="center">
            <img
              src="/images/Arrow.png"
              width="100"
              height="100"
              alt="drag-here"
            />
            <Typography variant="h2" component="h2" sx={{ fontWeight: "900" }}>
              Dev Ops Engineer
            </Typography>
            <img
              src="/images/Arrow1.png"
              width="100"
              height="100"
              alt="drag-here"
            />
          </Stack>

          <Stack direction="row" alignItems="center">
            <Stack spacing={2}>
              <Typography variant="h5" component="h5">
                System Engineer
              </Typography>
              <Typography variant="h5" component="h5">
                Back-End Developer
              </Typography>
            </Stack>
            <img
              src="/images/Brackets.png"
              width="132"
              height="241"
              alt="drag-here"
            />

            <Typography variant="h4" component="h4">
              Other Roles
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
