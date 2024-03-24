import React from "react";
import { Typography, Stack, Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { Avatar } from "../components/Conversation/Avatar";

const Dashboard = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Sidebar>
      <Box
        sx={{
          overflow: "hidden",
          paddingLeft: { lg: "25rem" },
          height: "100vh",
        }}
      >
        <Box
          sx={{
            padding: {
              lg: "2rem 0.75rem",
              md: "2rem 1.5rem",
              sm: "2rem 1.25rem",
              xs: "10px",
            },
            height: "100%",
            backgroundColor: "#19192F",
          }}
        >
          {/* Heading */}
          <Typography
            variant={isMediumScreen ? "h2" : "h4"}
            sx={{ fontWeight: "900", textAlign: "center", marginTop: "20px" }}
          >
            Welcome, Engineer Moeed
          </Typography>
          {/* Unread Message, Pending Request */}
          <Stack
            spacing={isMediumScreen ? 3 : 1}
            direction={isMediumScreen ? "row" : "column"}
            alignItems={isMediumScreen ? "" : "center"}
            justifyContent="center"
            sx={{
              marginTop: { md: "5rem", xs: "1rem" },
            }}
          >
            <Box
              sx={{
                padding: "15px 20px",
                borderRadius: "12px",
                border: "1px solid gray",
                backdropFilter: "blur(25px)",
                width: { md: "calc(40% - 1.5rem)", xs: "calc(80% - 1.5rem)" },
                background:
                  "url('/public/images/Card.png'), linear-gradient(-253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
              }}
            >
              <Typography
                variant={isMediumScreen ? "h5" : "h6"}
                sx={{
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  marginBottom: { md: "20px", xs: "10px" },
                }}
              >
                Unread Messages:
              </Typography>
              <Stack direction="row" spacing={5} alignItems="center">
                <Avatar />
                <Typography
                  variant={isMediumScreen ? "h6" : "body1"}
                  fontFamily="Roboto"
                >
                  Nigga Chin
                </Typography>
                <span
                  style={{
                    fontFamily: "Roboto",
                    background:
                      "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                    borderRadius: "50%",
                    padding: "0 7px",
                    fontSize: "1rem",
                  }}
                >
                  2
                </span>
              </Stack>
            </Box>
            <Box
              sx={{
                padding: "10px 20px",
                borderRadius: "12px",
                border: "1px solid gray",
                backdropFilter: "blur(25px)",
                width: { md: "calc(40% - 1.5rem)", xs: "calc(80% - 1.5rem)" },
                background:
                  "url('/public/images/Card.png'), linear-gradient(-253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
              }}
            >
              <Typography
                variant={isMediumScreen ? "h5" : "h6"}
                sx={{
                  textAlign: "left",
                  fontWeight: "600",
                  letterSpacing: "0.75px",
                  marginBottom: { md: "20px", xs: "10px" },
                }}
              >
                Pending Schedule Requests:
              </Typography>
              <Stack spacing={isMediumScreen ? 5 : 3}>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Avatar />
                  <Stack direction="column">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        variant={isMediumScreen ? "h6" : "body1"}
                        fontFamily="Roboto"
                      >
                        Nigga Man,
                      </Typography>
                      <Typography
                        variant={isMediumScreen ? "h6" : "body1"}
                        fontFamily="Roboto"
                      >
                        19
                      </Typography>
                    </div>
                    <Typography
                      variant={isMediumScreen ? "subtitle1" : "subtitle2"}
                      fontFamily="Roboto"
                    >
                      Software Developer
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Avatar />
                  <Stack direction="column">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        variant={isMediumScreen ? "h6" : "body1"}
                        fontFamily="Roboto"
                      >
                        Nigga Man,
                      </Typography>
                      <Typography
                        variant={isMediumScreen ? "h6" : "body1"}
                        fontFamily="Roboto"
                      >
                        19
                      </Typography>
                    </div>
                    <Typography
                      variant={isMediumScreen ? "subtitle1" : "subtitle2"}
                      fontFamily="Roboto"
                    >
                      Software Developer
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default Dashboard;
