import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Done, Close } from "@mui/icons-material";

const Schedule = () => {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"));

  const [activeTab, setActiveTab] = useState("active");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Sidebar>
      <div
        style={{
          paddingLeft: lgScreen ? "25rem" : "inherit",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#19192F",
            height: "100%",
            padding: { md: "2rem 5rem", sm: "1rem", xs: "10px" },
          }}
        >
          <Typography
            variant={mdScreen ? "h2" : "h4"}
            sx={{
              textAlign: "center",
              fontWeight: "900",
              marginBottom: "10px",
            }}
          >
            Schedules
          </Typography>
          <Box
            sx={{
              width: "100%",
              padding: { md: "2rem 8px", sm: "2rem 0" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <Button
                onClick={() => handleTabChange("active")}
                sx={{
                  background:
                    activeTab === "active"
                      ? "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)"
                      : "transparent",

                  color: "white",
                  textTransform: "capitalize",
                  ":hover": { backgroundColor: "transparent" },
                }}
              >
                Active Requests
              </Button>
              <Button
                onClick={() => handleTabChange("pending")}
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                  background:
                    activeTab === "pending"
                      ? "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)"
                      : "transparent",
                  ":hover": { backgroundColor: "transparent" },
                }}
              >
                Pending Requests
              </Button>
            </Box>

            {activeTab === "active" && (
              <>
                <Typography
                  textAlign="center"
                  variant={mdScreen ? "h4" : "h5"}
                  fontWeight="600"
                  mt={5}
                  p={2}
                >
                  Active Requests
                </Typography>
                <Box
                  sx={{
                    background:
                      "url('/public/images/Card.png'), linear-gradient(-253.09deg, rgba(217, 217, 217, 0.15) 100.53%, rgba(217, 217, 217, 0) 100.04%)",
                  }}
                >
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                          >
                            Name
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                            align="right"
                          >
                            Role
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                            align="right"
                          >
                            Date
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                            align="right"
                          >
                            Time
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            sx={{ color: "white" }}
                            component="th"
                            scope="row"
                          >
                            Moeed Rafi
                          </TableCell>
                          <TableCell sx={{ color: "white" }} align="right">
                            Software Engineer
                          </TableCell>
                          <TableCell sx={{ color: "white" }} align="right">
                            {new Date().toLocaleDateString()}
                          </TableCell>
                          <TableCell sx={{ color: "white" }} align="right">
                            {new Date().toLocaleString("en-US", {
                              hour12: true,
                              hour: "numeric",
                              minute: "2-digit",
                            })}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </>
            )}

            {activeTab === "pending" && (
              <>
                <Typography
                  textAlign="center"
                  variant={mdScreen ? "h4" : "h5"}
                  fontWeight="600"
                  mt={5}
                  p={2}
                >
                  Pending Requests
                </Typography>
                <Box
                  sx={{
                    background:
                      "url('/public/images/Card.png'), linear-gradient(-253.09deg, rgba(217, 217, 217, 0.15) 100.53%, rgba(217, 217, 217, 0) 100.04%)",
                  }}
                >
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                          >
                            Name
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                            align="right"
                          >
                            Role
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                            align="right"
                          >
                            Date
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                            align="right"
                          >
                            Time
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              fontFamily: "Raleway",
                              fontSize: "20px",
                              fontWeight: "600",
                            }}
                            align="right"
                          >
                            Accept/Reject
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            sx={{ color: "white" }}
                            component="th"
                            scope="row"
                          >
                            Moeed Rafi
                          </TableCell>
                          <TableCell sx={{ color: "white" }} align="right">
                            Software Engineer
                          </TableCell>
                          <TableCell sx={{ color: "white" }} align="right">
                            {new Date().toLocaleDateString()}
                          </TableCell>
                          <TableCell sx={{ color: "white" }} align="right">
                            {new Date().toLocaleString("en-US", {
                              hour12: true,
                              hour: "numeric",
                              minute: "2-digit",
                            })}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              display: "flex",
                              gap: "10px",
                              justifyContent: "right",
                            }}
                          >
                            <Done
                              sx={{
                                backgroundColor: "green",
                                borderRadius: "5px",
                                cursor: "pointer",
                                ":hover": { opacity: 0.7 },
                              }}
                            />
                            <Close
                              sx={{
                                backgroundColor: "red",
                                borderRadius: "5px",
                                cursor: "pointer",
                                ":hover": { opacity: 0.7 },
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </div>
    </Sidebar>
  );
};

export default Schedule;
