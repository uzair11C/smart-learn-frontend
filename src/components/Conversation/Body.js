import React, { useEffect, useRef } from "react";
import { Box, Typography, Stack, Skeleton } from "@mui/material";

export const Body = ({ messages, loading }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Box sx={{ flex: "1", overflowY: "auto", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          // alignItems: role === "user" ? "flex-end" : "flex-start",
          padding: { md: "10px 70px", xs: "10px 30px" },
          gap: "10px",
        }}
      >
        {messages &&
          messages.map((message, index) =>
            message.role === "system" ? null : (
              <Box
                key={index}
                sx={{
                  borderRadius: "8px",
                  lineHeight: "10px",
                  minWidth: "7%",
                  maxWidth: { md: "55%", xs: "80%" },
                  padding: { md: "20px", xs: "10px" },
                  color: "white",
                  background:
                    "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
                  backdropFilter: "blur(25px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  alignSelf:
                    message.role === "user" ? "flex-end" : "flex-start",
                }}
                ref={index === messages.length - 1 ? messageRef : null}
              >
                <Stack direction="column" spacing={2}>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "3vmin",
                      color: "rgb(107 114 128 / 1)",
                    }}
                  >
                    {message.role === "user" ? "You" : "Sage"}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "2.5vmin",
                      lineHeight: "25px",
                    }}
                  >
                    {message.content}
                  </Typography>
                </Stack>
              </Box>
            )
          )}

        {loading && (
          <Box
            sx={{
              borderRadius: "8px",
              lineHeight: "10px",
              minWidth: "7%",
              maxWidth: { md: "55%", xs: "80%" },
              padding: { md: "20px", xs: "10px" },
              //   background:
              //     "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <Stack direction="column" spacing={2}>
              <Typography>
                <Skeleton animation="wave" />
              </Typography>
              <Typography variant="p" lineHeight="20px">
                <Skeleton animation="wave" />
              </Typography>
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};
