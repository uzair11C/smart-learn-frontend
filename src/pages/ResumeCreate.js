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
  const [isEdit, setIsEdit] = useState(false);
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
      showCGPA: false,
    },
  ]);
  const [experienceFields, setExperienceFields] = useState([
    {
      id: uuidv4(),
      company: "Company Name",
      title: "Title",
      location: "Location",
      date: "Date Period",
      descriptions: [
        "What are your achievements",
        "What are your achievements",
      ],
    },
  ]);
  const [projectFields, setProjectFields] = useState([
    {
      id: uuidv4(),
      header: "Project",
      title: "Title",
      date: "Date Period",
      descriptions: ["Description 1", "Description 2"],
    },
  ]);
  const [skillsFields, setSkillsFields] = useState([
    {
      id: uuidv4(),
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "NodeJS"],
    },
    {
      id: uuidv4(),
      title: "Libraries",
      skills: [
        "ReactJS",
        "React Native",
        "Redux",
        "Redux Toolkit",
        "Zustand",
        "Material UI",
        "Bootstrap",
        "Tailwind",
        "ShadCN",
      ],
    },
    {
      id: uuidv4(),
      title: "Tools",
      skills: [
        "Node",
        "NPM",
        "Yarn",
        "Vite",
        "Git",
        "Supabase",
        "Firebase",
        "DevOps",
      ],
    },
    {
      id: uuidv4(),
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Excellent Communication",
        "Team Management",
        "Decision Making",
      ],
    },
  ]);
  const [certificationsFields, setCertificationsFields] = useState([
    {
      id: uuidv4(),
      issueBy: "Issued By",
      name: "Certificate Name",
    },
  ]);

  const toggle = (id, fieldName) => {
    setEducationFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [fieldName]: !field[fieldName] } : field
      )
    );
  };

  // summary
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
  const handleAddEducationField = () => {
    const newField = {
      id: uuidv4(),
      university: "University",
      degree: "Degree and Field of Study",
      cgpa: "CGPA",
      date: "Date Period",
    };
    setEducationFields([...educationFields, newField]);
  };
  const handleRemoveEducationField = (id) => {
    const removeField = educationFields.filter((field) => field.id !== id);
    setEducationFields(removeField);
  };

  // Experience
  const handleExperienceChange = (id, value, label) => {
    setExperienceFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [label]: value } : field
      )
    );
  };
  const handleAddExperienceField = () => {
    const newField = {
      id: uuidv4(),
      company: "Company Name",
      title: "Title",
      location: "Location",
      date: "Date Period",
      descriptions: [
        "What are your achievements",
        "What are your achievements",
      ],
    };

    setExperienceFields([...experienceFields, newField]);
  };
  const handleRemoveExperienceField = (id) => {
    const removeField = experienceFields.filter((field) => field.id !== id);
    setExperienceFields(removeField);
  };

  const handleExperienceDescriptionChange = (experienceId, index, value) => {
    setExperienceFields((prevFields) =>
      prevFields.map((experience) =>
        experience.id === experienceId
          ? {
              ...experience,
              descriptions: experience.descriptions.map((desc, i) =>
                i === index ? value : desc
              ),
            }
          : experience
      )
    );
  };
  const handleAddExperienceDescription = (experienceId) => {
    setExperienceFields((prevFields) =>
      prevFields.map((experience) =>
        experience.id === experienceId
          ? {
              ...experience,
              descriptions: [
                ...experience.descriptions,
                "What are your achievements",
              ],
            }
          : experience
      )
    );
  };
  const handleRemoveExperienceDescription = (experienceId, index) => {
    setExperienceFields((prevFields) =>
      prevFields.map((experience) =>
        experience.id === experienceId
          ? {
              ...experience,
              descriptions: experience.descriptions.filter(
                (_, i) => i !== index
              ),
            }
          : experience
      )
    );
  };

  // Project
  const handleProjectChange = (id, value, label) => {
    setProjectFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [label]: value } : field
      )
    );
  };
  const handleAddProjectField = () => {
    const newField = {
      id: uuidv4(),
      title: "Title",
      date: "Date Period",
      descriptions: ["Description 1", "Description 2"],
    };

    setProjectFields([...projectFields, newField]);
  };
  const handleRemoveProjectField = (id) => {
    const removeField = projectFields.filter((field) => field.id !== id);
    setProjectFields(removeField);
  };

  const handleDescriptionChange = (projectId, index, value) => {
    setProjectFields((prevFields) =>
      prevFields.map((project) =>
        project.id === projectId
          ? {
              ...project,
              descriptions: project.descriptions.map((desc, i) =>
                i === index ? value : desc
              ),
            }
          : project
      )
    );
  };
  const handleAddDescription = (projectId) => {
    setProjectFields((prevFields) =>
      prevFields.map((project) =>
        project.id === projectId
          ? {
              ...project,
              descriptions: [...project.descriptions, "Description"],
            }
          : project
      )
    );
  };
  const handleRemoveDescription = (projectId, index) => {
    setProjectFields((prevFields) =>
      prevFields.map((project) =>
        project.id === projectId
          ? {
              ...project,
              descriptions: project.descriptions.filter((_, i) => i !== index),
            }
          : project
      )
    );
  };

  // Skills
  const handleSkillsChange = (id, value, label) => {
    setSkillsFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id
          ? { ...field, [label]: value.split(",").map((skill) => skill.trim()) }
          : field
      )
    );
  };
  const handleAddSkillsField = () => {
    const newField = {
      id: uuidv4(),
      title: "Title",
      skills: ["Skill 1", "Skill 2"],
    };
    setSkillsFields([...skillsFields, newField]);
  };
  const handleRemoveSkillsField = (id) => {
    const removeField = skillsFields.filter((field) => field.id !== id);
    setSkillsFields(removeField);
  };

  // Certifications
  const handleCertificationChange = (id, value, label) => {
    setCertificationsFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [label]: value } : field
      )
    );
  };
  const handleAddCertificationField = () => {
    const newField = {
      id: uuidv4(),
      issueBy: "Issued By",
      name: "Certificate Name",
    };
    setCertificationsFields([...certificationsFields, newField]);
  };
  const handleRemoveCertificationField = (id) => {
    const removeField = skillsFields.filter((field) => field.id !== id);
    setCertificationsFields(removeField);
  };

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
        justifyContent: "center",
        // alignItems: "center",
        gap: "20px",
        // position: "relative",
        // overflow: "auto",
        // height: "100vh",
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
              <Button onClick={() => toggle(field.id, "showCGPA")}>
                Show CGPA
              </Button>
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
                  onClick={() => handleRemoveEducationField(field.id)}
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
                  onClick={() => handleRemoveEducationField(field.id)}
                  sx={{
                    width: "40px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
              {field.showCGPA && (
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
                    onClick={() => handleRemoveEducationField(field.id)}
                    sx={{
                      width: "40px",
                      color: "white",
                      height: "40px",
                      cursor: "pointer",
                    }}
                  />
                </Stack>
              )}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="Date"
                  type="text"
                  variant="outlined"
                  onChange={(e) =>
                    handleEducationChange(field.id, e.target.value, "date")
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
                  onClick={() => handleRemoveEducationField(field.id)}
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

          <Button onClick={handleAddEducationField}>Add Another Field</Button>
        </Box>

        {/* Experience Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Experience
          </Typography>

          {experienceFields.map((experience) => (
            <React.Fragment key={experience.id}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="Company"
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleExperienceChange(
                      experience.id,
                      e.target.value,
                      "company"
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
                  onClick={() => handleRemoveExperienceField(experience.id)}
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
                  label="Title"
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleExperienceChange(
                      experience.id,
                      e.target.value,
                      "title"
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
                  onClick={() => handleRemoveExperienceField(experience.id)}
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
                  label="Location"
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleExperienceChange(
                      experience.id,
                      e.target.value,
                      "location"
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
                  onClick={() => handleRemoveExperienceField(experience.id)}
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
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleExperienceChange(
                      experience.id,
                      e.target.value,
                      "date"
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
                  onClick={() => handleRemoveProjectField(experience.id)}
                  sx={{
                    width: "40px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
              {experience.descriptions.map((_, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <TextField
                    label="Achievements"
                    variant="outlined"
                    onChange={(e) =>
                      handleExperienceDescriptionChange(
                        experience.id,
                        index,
                        e.target.value
                      )
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
                    onClick={() =>
                      handleRemoveExperienceDescription(experience.id, index)
                    }
                    sx={{
                      width: "40px",
                      color: "white",
                      height: "40px",
                      cursor: "pointer",
                    }}
                  />
                </Stack>
              ))}
              <Button
                onClick={() => handleAddExperienceDescription(experience.id)}
              >
                Add Description
              </Button>
            </React.Fragment>
          ))}

          <Button onClick={handleAddExperienceField}>
            Add Another Experience
          </Button>
        </Box>

        {/* Project Fields */}
        <Box>
          {projectFields.map((project) => (
            <React.Fragment key={project.id}>
              <Box sx={{ display: "flex" }}>
                {isEdit ? (
                  <TextField
                    variant="outlined"
                    type="text"
                    value={project.header}
                    onChange={(e) =>
                      handleProjectChange(project.id, e.target.value, "header")
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
                ) : (
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ color: "white" }}
                  >
                    {project.header}
                  </Typography>
                )}
                <Button onClick={() => setIsEdit(!isEdit)}>Edit</Button>
                <Button>Delete</Button>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="Title"
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleProjectChange(project.id, e.target.value, "title")
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
                  onClick={() => handleRemoveProjectField(project.id)}
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
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleProjectChange(project.id, e.target.value, "date")
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
                  onClick={() => handleRemoveProjectField(project.id)}
                  sx={{
                    width: "40px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
              {project.descriptions.map((_, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <TextField
                    label="Description"
                    variant="outlined"
                    onChange={(e) =>
                      handleDescriptionChange(project.id, index, e.target.value)
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
                    onClick={() => handleRemoveDescription(project.id, index)}
                    sx={{
                      width: "40px",
                      color: "white",
                      height: "40px",
                      cursor: "pointer",
                    }}
                  />
                </Stack>
              ))}
              <Button onClick={() => handleAddDescription(project.id)}>
                Add Description
              </Button>
            </React.Fragment>
          ))}

          <Button onClick={handleAddProjectField}>Add Another Project</Button>
        </Box>

        {/* Skills Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Skills
          </Typography>

          {skillsFields.map((field) => (
            <React.Fragment key={field.id}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="Title"
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleSkillsChange(field.id, e.target.value, "title")
                  }
                  value={field.title}
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
                  onClick={() => handleRemoveSkillsField(field.id)}
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
                  label="Skills"
                  type="text"
                  variant="outlined"
                  value={field.skills}
                  onChange={(e) =>
                    handleSkillsChange(field.id, e.target.value, "skills")
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
                  onClick={() => handleRemoveSkillsField(field.id)}
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

          <Button onClick={handleAddSkillsField}>Add Another Field</Button>
        </Box>

        {/* Certifications Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Certifications
          </Typography>

          {certificationsFields.map((field) => (
            <React.Fragment key={field.id}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  label="Issue By"
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleCertificationChange(
                      field.id,
                      e.target.value,
                      "issueBy"
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
                  onClick={() => handleRemoveCertificationField(field.id)}
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
                  label="Certification Name"
                  variant="outlined"
                  type="text"
                  onChange={(e) =>
                    handleCertificationChange(field.id, e.target.value, "name")
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
                  onClick={() => handleRemoveCertificationField(field.id)}
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

          <Button onClick={handleAddCertificationField}>
            Add Another Field
          </Button>
        </Box>
      </Stack>

      {/* RESUME DESIGN */}
      <Box
        sx={{
          width: "8.27in",
          height: "11.69in",
          backgroundColor: "white",
          p: "50px 20px",
          position: "sticky",
          top: "50px",
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
                  {field.showCGPA ? field.cgpa || "CGPA" : null}
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
          {experienceFields.map((experience) => (
            <Box key={experience.id}>
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
                    {experience.company || "Company Name"}
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
                    {experience.title || "Title"}
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
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    {experience.location || "Location"}
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
                    {experience.date || "Date Period"}
                  </Typography>
                </Box>
              </Stack>
              <List
                sx={{
                  pl: "20px",
                  listStyleType: "disc",
                }}
              >
                {experience.descriptions.map((desc, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      p: 0,
                      display: "list-item",
                      color: "rgb(111, 120, 120)",
                      fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                      fontSize: "12px",
                      lineHeight: "17px",
                    }}
                  >
                    {desc || "What are your achievements"}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Stack>

        {/* Projects */}
        {projectFields.map((project) => (
          <Stack key={project.id} sx={{ mt: "30px" }}>
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
              {project.header}
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
                  {project.title || "Title"}
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
                  {project.date || "Date Period"}
                </Typography>
              </Stack>
              <List
                sx={{
                  pl: "20px",
                  listStyleType: "disc",
                }}
              >
                {project.descriptions.map((desc, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      p: 0,
                      display: "list-item",
                      color: "rgb(111, 120, 120)",
                      fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
                      fontSize: "12px",
                      lineHeight: "17px",
                    }}
                  >
                    {desc}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
        ))}

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
          {skillsFields.map((skills) => (
            <Stack key={skills.id} direction="row" spacing={2}>
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
                  {skills.title}:
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
                  {skills.skills.join(", ")}
                </Typography>
              </Box>
            </Stack>
          ))}
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
          {certificationsFields.map((cert) => (
            <Stack key={cert.id} direction="row" spacing={2}>
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
                  {cert.issueBy}
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
                  {cert.name}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ResumeCreate;
