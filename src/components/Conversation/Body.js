import React, { useEffect, useRef } from "react";
import { Box, Typography, Stack, Skeleton } from "@mui/material";
import "./Body.css";
import Markdown from "react-markdown";

export const Body = ({ messages, loading }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const defaultMessage =
    "Hello there! I am Career Sage! I specialize in providing guidance related to careers in the IT and software industry. Here are some of the ways I can assist you:\n\n1. **Career Paths**: Information on various career paths within the IT industry, including roles like software developer, data scientist, system administrator, IT consultant, and more.\n\n2. **Skill Requirements**: Details on the skills and technologies required for different positions in the IT sector.\n\n3. **Learning Resources**: Recommendations for courses, certifications, and learning paths to help you acquire necessary skills.\n\n4. **Job Preparation**: Tips on preparing for job interviews, creating an effective resume, and building a professional portfolio.\n\n5. **Market Trends**: Insights into current trends and future projections in the IT industry.\n\n6. **Work Environment**: Information on the work culture, remote work opportunities, and company types within the IT sector.\n\n7. **Tools and Technologies**: Overviews of popular tools, programming languages, frameworks, and platforms used in the industry.\n\n8. **Career Transition**: Guidance for transitioning into IT from other industries or moving between different roles within the IT sector.\n\nIf you have any specific questions or need information on any topic related to IT careers, feel free to ask!";

  return (
    <Box
      sx={{
        flex: "1",
        overflowY: "auto",
        height: "100%",
        backgroundImage: "url('/images/ChatBG.png')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "70% 100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          // alignItems: role === "user" ? "flex-end" : "flex-start",
          padding: { md: "10px 70px", xs: "10px 30px" },
          gap: "20px",
        }}
      >
        <Box
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
            alignSelf: "flex-start",
          }}
        >
          <Stack direction="column" spacing={2}>
            <Typography
              variant="p"
              sx={{
                fontSize: "3vmin",
                color: "rgb(107 114 128 / 1)",
              }}
            >
              Sage
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "2.5vmin",
                lineHeight: "25px",
              }}
            >
              <Markdown>{defaultMessage}</Markdown>
            </Typography>
          </Stack>
        </Box>
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
                    <Markdown>{message.content}</Markdown>
                  </Typography>
                </Stack>
              </Box>
            ),
          )}
        {loading && (
          <Box
            sx={{
              borderRadius: "8px",
              lineHeight: "10px",
              // minWidth: "7%",
              width: { md: "45%", xs: "70%" },
              padding: { md: "20px", xs: "10px" },
              background:
                "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.1) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <Stack direction="column" spacing={2}>
              <Typography>
                <Skeleton animation="pulse" variant="rounded" width={80} />
              </Typography>
              <Typography variant="p" lineHeight="20px">
                <Skeleton animation="wave" variant="rounded" />
              </Typography>
              <Typography variant="p" lineHeight="20px">
                <Skeleton animation="wave" variant="rounded" />
              </Typography>
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};
