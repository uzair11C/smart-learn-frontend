import React from "react";
import { Box, Typography, Stack } from "@mui/material";

export const Body = () => {
  return (
    <div style={{ flex: "1 1 0", overflowY: "auto" }}>
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          padding: "1rem",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "1rem",
              borderRadius: "8px",
              lineHeight: "1.25rem",
              display: "inline-block",
              minWidth: "30%",
              maxWidth: "70%",
              overflow: "hidden",
              padding: "1.25rem",
              color: "white",
              background:
                "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
              backdropFilter: "blur(25px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <Stack direction="column" spacing={2}>
              <Typography
                variant="p"
                sx={{
                  fontSize: "0.875rem",
                  color: "rgb(107 114 128 / 1)",
                }}
              >
                You
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                imperdiet semper lacinia. Aenean varius tellus ut odio fermentum
                pulvinar.
              </Typography>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};
