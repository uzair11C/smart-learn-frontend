import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

const ResumeCreate = () => {
  const [fields, setFields] = useState([
    {
      id: 1,
      label: "Name",
      value: "Your Name",
      type: "text",
      defaultValue: "Your Name",
    },
    {
      id: 2,
      label: "Role",
      value: "The role you are applying for?",
      type: "text",
      defaultValue: "The role you are applying for?",
    },
    {
      id: 3,
      label: "Email",
      value: "Email",
      type: "email",
      defaultValue: "Email",
    },
    {
      id: 4,
      label: "Phone",
      value: "Phone",
      type: "text",
      defaultValue: "Phone",
    },
    {
      id: 5,
      label: "LinkedIn",
      value: "LinkedIn",
      type: "url",
      defaultValue: "LinkedIn",
    },
    {
      id: 6,
      label: "Github",
      value: "Github",
      type: "url",
      defaultValue: "Github",
    },
    {
      id: 7,
      label: "Location",
      value: "Location",
      type: "text",
      defaultValue: "Location",
    },
  ]);
  const [summaryFields, setSummaryFields] = useState([
    {
      id: uuidv4(),
      value: "What's the one thing that makes you best candidate for this job",
    },
  ]);
  const [educationFields, setEducationFields] = useState([
    {
      id: uuidv4(),
      university: "University",
      degree: "Degree and Field of Study",
      cgpa: "CGPA",
      date: "Date Period",
    },
  ]);

  const handleChange = (id, value) => {
    setSummaryFields(
      summaryFields.map((field) => {
        if (field.id === id) {
          return { ...field, value };
        }
        return field;
      })
    );
  };

  const handleAddField = () => {
    const newField = [
      ...summaryFields,
      {
        id: uuidv4(),
        value:
          "What's the one thing that makes you best candidate for this job",
      },
    ];
    setSummaryFields(newField);
  };

  const handleRemoveField = (id) => {
    const updatedFields = summaryFields.filter((field) => field.id !== id);
    setSummaryFields(updatedFields);
  };

  // Personal Information
  const handleAddInfoField = () => {
    if (fields.length === 9) {
      return;
    }
    const newField = {
      id: fields.length + 1,
      label: `Custom Field ${fields.length + 1}`,
      value: "",
      type: "text",
      defaultValue: "extra",
    };
    setFields([...fields, newField]);
  };

  const handleRemoveInfoField = (id) => {
    const removeField = fields.filter((field) => field.id !== id);
    setFields(removeField);
  };

  const handleFieldChange = (id, value, label) => {
    if (label === "education") {
      console.log("edu");
      setEducationFields((prevFields) =>
        prevFields.map((field) =>
          field.id === id ? { ...field, value } : field
        )
      );
    }

    if (label === "personal") {
      setFields((prevFields) =>
        prevFields.map((field) =>
          field.id === id ? { ...field, value } : field
        )
      );
    }
  };

  // education
  const handleEducationChange = (id, value, label) => {
    setEducationFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [label]: value } : field
      )
    );
  };

  console.log(educationFields);

  return (
    <Box
      sx={{
        backgroundColor: "#19192F",
        padding: "50px",
        // color: "#FFFFFF",
        // maxWidth: "100%",
        // minHeight: "100vh",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        gap: "20px",
      }}
    >
      {/* FORM FIELDS */}
      <Stack spacing={3}>
        {/* Personal Info Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Personal Information
          </Typography>
          {fields.map((field) => (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              key={field.id}
            >
              <TextField
                label={field.label}
                variant="outlined"
                type={field.type}
                // value={field.value ? field.value : field.label}
                onChange={(e) =>
                  handleFieldChange(field.id, e.target.value, "personal")
                }
                sx={{
                  mt: "20px",
                  width: "500px",
                  flex: 1,
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.3)",
                    borderRadius: "8px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "rgba(255,255,255,0.3)" },
                }}
                inputProps={{
                  style: {
                    color: "#FFFFFF",
                  },
                }}
                InputProps={{
                  style: {
                    background: "#222141",
                  },
                }}
              />
              <Delete
                onClick={() => handleRemoveInfoField(field.id)}
                sx={{
                  width: "40px",
                  color: "white",
                  height: "40px",
                  cursor: "pointer",
                }}
              />
            </Stack>
          ))}
          <Button onClick={handleAddInfoField}>
            {fields.length !== 9 ? "Add Another Field" : null}
          </Button>
        </Box>

        {/* Summary Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Summary
          </Typography>

          {summaryFields.map((field) => (
            <Stack
              key={field.id}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                label="What's the one thing that makes you best candidate"
                variant="outlined"
                multiline
                maxRows={5}
                type="text"
                onChange={(e) => handleChange(field.id, e.target.value)}
                // value={field.value}
                sx={{
                  mt: "20px",
                  width: "500px",
                  flex: 1,
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.3)",
                    borderRadius: "8px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "rgba(255,255,255,0.3)" },
                }}
                inputProps={{
                  style: {
                    color: "#FFFFFF",
                  },
                }}
                InputProps={{
                  style: {
                    background: "#222141",
                  },
                }}
              />
              <Delete
                onClick={() => handleRemoveField(field.id)}
                sx={{
                  width: "40px",
                  color: "white",
                  height: "40px",
                  cursor: "pointer",
                }}
              />
            </Stack>
          ))}

          <Button onClick={handleAddField}>Add Paragraph</Button>
        </Box>

        {/* Education Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Education
          </Typography>

          {educationFields.map((field) => (
            <React.Fragment key={field.id}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="University"
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleEducationChange(
                      field.id,
                      e.target.value,
                      "university"
                    )
                  }
                  // value={field.value}
                  sx={{
                    mt: "20px",
                    width: "500px",
                    flex: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.3)" },
                  }}
                  inputProps={{
                    style: {
                      color: "#FFFFFF",
                    },
                  }}
                  InputProps={{
                    style: {
                      background: "#222141",
                    },
                  }}
                />
                <Delete
                  onClick={() => handleRemoveField(field.id)}
                  sx={{
                    width: "40px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="Degree"
                  variant="outlined"
                  multiline
                  maxRows={5}
                  type="text"
                  onChange={(e) =>
                    handleEducationChange(field.id, e.target.value, "degree")
                  }
                  // value={field.value}
                  sx={{
                    mt: "20px",
                    width: "500px",
                    flex: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.3)" },
                  }}
                  inputProps={{
                    style: {
                      color: "#FFFFFF",
                    },
                  }}
                  InputProps={{
                    style: {
                      background: "#222141",
                    },
                  }}
                />
                <Delete
                  onClick={() => handleRemoveField(field.id)}
                  sx={{
                    width: "40px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="CGPA"
                  variant="outlined"
                  multiline
                  maxRows={5}
                  type="text"
                  onChange={(e) =>
                    handleEducationChange(field.id, e.target.value, "cgpa")
                  }
                  // value={field.value}
                  sx={{
                    mt: "20px",
                    width: "500px",
                    flex: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.3)" },
                  }}
                  inputProps={{
                    style: {
                      color: "#FFFFFF",
                    },
                  }}
                  InputProps={{
                    style: {
                      background: "#222141",
                    },
                  }}
                />
                <Delete
                  onClick={() => handleRemoveField(field.id)}
                  sx={{
                    width: "40px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="Date"
                  type="month"
                  variant="outlined"
                  onChange={(e) =>
                    handleEducationChange(field.id, e.target.value, "date")
                  }
                  // value={field.value}
                  sx={{
                    mt: "20px",
                    width: "500px",
                    flex: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.3)" },
                  }}
                  inputProps={{
                    style: {
                      color: "#FFFFFF",
                    },
                  }}
                  InputProps={{
                    style: {
                      background: "#222141",
                    },
                  }}
                />
                <Delete
                  onClick={() => handleRemoveField(field.id)}
                  sx={{
                    width: "40px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
            </React.Fragment>
          ))}

          <Button onClick={handleAddField}>Add Paragraph</Button>
        </Box>
      </Stack>

      {/* RESUME DESIGN */}
      <Box
        sx={{
          width: "8.27in",
          height: "11.69in",
          backgroundColor: "white",
          p: "50px 20px",
        }}
      >
        {/* Personal Info */}
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
            {fields.find((field) => field.label === "Name")?.value ||
              fields.find((field) => field.label === "Name")?.defaultValue}
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
            {fields.find((field) => field.label === "Role")?.value ||
              fields.find((field) => field.label === "Role")?.defaultValue}
          </Typography>
          {/* Links */}
          <Stack
            direction="row"
            justifyContent="space-evenly"
            sx={{ mt: "10px", flexWrap: "wrap", flexBasis: "1" }}
          >
            {fields
              .filter(
                (field) => field.label !== "Name" && field.label !== "Role"
              )
              .map((field) => (
                <Typography
                  key={field.id}
                  sx={{
                    p: 0,
                    fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                    fontSize: "13px",
                    lineHeight: "16px",
                  }}
                >
                  {field.value || field.defaultValue}
                </Typography>
              ))}
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
          <Stack>
            {summaryFields.map((field) => (
              <Typography
                key={field.id}
                component="p"
                value={field.value}
                sx={{
                  mt: "5px",
                  color: "rgb(111, 120, 120)",
                  fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                  fontSize: "12px",
                  lineHeight: "17px",
                }}
              >
                {field.value ||
                  "What's the one thing that makes you best candidate for this job"}
              </Typography>
            ))}
          </Stack>
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
          {educationFields.map((field) => (
            <Stack
              key={field.id}
              direction="row"
              justifyContent="space-between"
            >
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
                  {field.university || "University"}
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
                  {field.degree || "Degree and Field of Study"}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
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
                  {field.cgpa || "CGPA"}
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
                  {field.date || "Date Period"}
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
                  {field.date || "Date Period"}
                </Typography>
              </Box>
            </Stack>
          ))}
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

export default ResumeCreate;
