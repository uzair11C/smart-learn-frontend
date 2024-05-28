import React, { useState } from "react";
import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";

const test = () => {
  const [projects, setProjects] = useState([
    {
      title: "Title of Project",
      date: "Date Period",
      desc: "Project Description",
    },
  ]);

  return (
    <Box
      sx={{
        backgroundColor: "#19192F",
        padding: "50px",
        // color: "#FFFFFF",
        // maxWidth: "100%",
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          width: "8.27in",
          height: "11.69in",
          backgroundColor: "white",
          p: "50px 20px",
        }}
      >
        <Stack>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Muhammad Moeed Rafi
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "rgb(111, 120, 120)",
              fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
              textTransform: "capitalize",
              fontSize: "16px",
              lineHeight: "19px",
            }}
          >
            Software Developer
          </Typography>
          {/* Links */}
          <Stack direction="row" justifyContent="center">
            <List
              sx={{
                listStyleType: "disc",
                display: "flex",
                alignItems: "center",
                gap: "25px",
              }}
            >
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "13px",
                  lineHeight: "16px",
                }}
              >
                test@gmail.com
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "13px",
                  lineHeight: "16px",
                }}
              >
                https://Niggawhat.com/moeedrafi
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "13px",
                  lineHeight: "16px",
                }}
              >
                https://Niggawhat.com/moeedrafi
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "13px",
                  lineHeight: "16px",
                }}
              >
                +923333333333
              </ListItem>
            </List>
          </Stack>
        </Stack>

        {/* Summary */}
        <Stack sx={{ mt: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Summary
          </Typography>
          <Divider sx={{ borderColor: "black" }} />
          <Typography
            component="p"
            sx={{
              mt: "5px",
              color: "rgb(111, 120, 120)",
              fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
              textTransform: "capitalize",
              fontSize: "12px",
              lineHeight: "17px",
            }}
          >
            What's the one thing that makes you best candidate for this job
          </Typography>
        </Stack>

        {/* Education */}
        <Stack sx={{ mt: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Education
          </Typography>
          <Divider sx={{ borderColor: "black" }} />
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                University
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Degree and Field of Study
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                CGPA
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Date Period
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Experience */}
        <Stack sx={{ mt: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Experience
          </Typography>
          <Divider sx={{ borderColor: "black" }} />
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Company Name
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
              >
                Title
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Location
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Date Period
              </Typography>
            </Box>
          </Stack>
          <List
            sx={{
              pl: "20px",
              listStyleType: "disc",
            }}
          >
            <ListItem
              sx={{
                p: 0,
                display: "list-item",
                color: "rgb(111, 120, 120)",
                fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                fontSize: "12px",
                lineHeight: "17px",
              }}
            >
              What are your achievements
            </ListItem>
            <ListItem
              sx={{
                p: 0,
                display: "list-item",
                color: "rgb(111, 120, 120)",
                fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                fontSize: "12px",
                lineHeight: "17px",
              }}
            >
              What are your achievements
            </ListItem>
            <ListItem
              sx={{
                p: 0,
                display: "list-item",
                color: "rgb(111, 120, 120)",
                fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                fontSize: "12px",
                lineHeight: "17px",
              }}
            >
              What are your achievements
            </ListItem>
          </List>
        </Stack>

        {/* Projects */}
        {/* <Stack sx={{ mt: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Projects
          </Typography>
          <Divider sx={{ borderColor: "black" }} />
          <Box>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Title
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Date Period
              </Typography>
            </Stack>
            <List
              sx={{
                pl: "20px",
                listStyleType: "disc",
              }}
            >
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Project Description
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Project Description
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Project Description
              </ListItem>
            </List>
          </Box>
        </Stack> */}

        <Stack sx={{ mt: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Projects
          </Typography>
          <Divider sx={{ borderColor: "black" }} />
          <Box>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Title
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                Date Period
              </Typography>
            </Stack>
            <List
              sx={{
                pl: "20px",
                listStyleType: "disc",
              }}
            >
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Project Description
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Project Description
              </ListItem>
              <ListItem
                sx={{
                  p: 0,
                  display: "list-item",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Project Description
              </ListItem>
            </List>
          </Box>
        </Stack>

        {/* Skills */}
        <Stack sx={{ mt: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Skills
          </Typography>
          <Divider sx={{ borderColor: "black" }} />
          <Stack direction="row" spacing={2}>
            <Box sx={{ minWidth: "80px" }}>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Languages:
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                JavaScript, TypeScript, Python
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Box sx={{ minWidth: "80px" }}>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Libraries:
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                ReactJS, React Native, Redux, Redux Toolkit, Zustand, Material
                UI, Bootstrap, Tailwind, ShadCN
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Box sx={{ minWidth: "80px" }}>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Tools:
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Node, NPM, Yarn, Vite, Git, Supabase, Firebase, DevOps
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Box sx={{ minWidth: "80px" }}>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Soft Skills:
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Problem Solving, Excellent Communication, Team Management,
                Decision Making
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Certifications */}
        <Stack sx={{ mt: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
              textTransform: "uppercase",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Certifications
          </Typography>
          <Divider sx={{ borderColor: "black" }} />
          <Stack direction="row" spacing={2}>
            <Box sx={{ minWidth: "50px" }}>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Meta
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                Meta Front-End Developer Professional Certificate
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default test;

{
  /* <InputBase
                  placeholder="Email"
                  //   ref={emailInputRef}
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                    fontSize: "13px",
                    lineHeight: "16px",
                  }}
                /> */
}
{
  /* <span
                  ref={emailSpanRef}
                  style={{
                    visibility: "hidden",
                    whiteSpace: "pre",
                    fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                    fontSize: "13px",
                    lineHeight: "16px",
                    position: "absolute",
                    left: "0",
                    padding: "0 10px", // Ensure the span matches the input padding
                  }}
                >
                  {email || " "}
                </span> */
}

{
  /* {education.map((entry, index) => (
          <Stack key={index}>
            <TextField
              label="University"
              value={entry.university}
              onChange={(e) =>
                handleChange(index, "university", e.target.value)
              }
            />
            <TextField
              label="Degree"
              value={entry.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
            <TextField
              label="CGPA"
              value={entry.cgpa}
              onChange={(e) => handleChange(index, "cgpa", e.target.value)}
            />
            <TextField
              label="Date"
              value={entry.date}
              onChange={(e) => handleChange(index, "date", e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => handleRemoveEntry(index)}
            >
              Delete Entry
            </Button>
          </Stack>
        ))}
        <Button variant="contained" onClick={handleAddEntry}>
          Add Entry
        </Button> */
}
