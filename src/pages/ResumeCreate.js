import React, { useRef, useState } from "react";
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
import { useReactToPrint } from "react-to-print";

const ResumeCreate = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [userDetails, setUserDetails] = useState([
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
  ]);
  const [profileFields, setProfileFields] = useState([
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
      type: "tel",
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
      showLocation: true,
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
      header: "Education",
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
      header: "Experience",
      company: "Company Name",
      title: "Title",
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
      header: "Certifications",
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

  // Personal Information
  const handleAddInfoField = () => {
    if (profileFields.length === 9) {
      return;
    }
    const newField = {
      id: profileFields.length + 1,
      label: `Custom Field ${profileFields.length + 1}`,
      value: "",
      type: "text",
      defaultValue: "extra",
    };
    setProfileFields([...profileFields, newField]);
  };
  const handleRemoveInfoField = (id) => {
    const removeField = profileFields.filter((field) => field.id !== id);
    setProfileFields(removeField);
  };
  const handlePersonalFieldChange = (id, value, label) => {
    if (label === "userDetails") {
      setUserDetails((prevFields) =>
        prevFields.map((field) =>
          field.id === id ? { ...field, value } : field
        )
      );
    }
    if (label === "profile") {
      setProfileFields((prevFields) =>
        prevFields.map((field) =>
          field.id === id ? { ...field, value } : field
        )
      );
    }
  };

  // Change Functions
  const handleFieldChange = (setFields) => (id, value, label) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [label]: value } : field
      )
    );
  };
  const handleDescChange = (setFields) => (projectId, index, value) => {
    setFields((prevFields) =>
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
  const handleSkillChange = (setFields) => (id, value, label) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id
          ? { ...field, [label]: value.split(",").map((skill) => skill.trim()) }
          : field
      )
    );
  };

  const handleChange = handleFieldChange(setSummaryFields);
  const handleEducationChange = handleFieldChange(setEducationFields);
  const handleExperienceChange = handleFieldChange(setExperienceFields);
  const handleExperienceDescriptionChange =
    handleDescChange(setExperienceFields);
  const handleProjectChange = handleFieldChange(setProjectFields);
  const handleDescriptionChange = handleDescChange(setProjectFields);
  const handleSkillsChange = handleSkillChange(setSkillsFields);
  const handleCertificationChange = handleFieldChange(setCertificationsFields);

  // Add Functions
  const handleAddField = (setFields, defaultField) => {
    const newField = { id: uuidv4(), ...defaultField };
    setFields((prevFields) => [...prevFields, newField]);
  };
  const handleAddDescription = (setFields, fieldId) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId
          ? { ...field, descriptions: [...field.descriptions, "Description"] }
          : field
      )
    );
  };
  const handleAddExperienceDescription = (experienceId) => {
    handleAddDescription(setExperienceFields, experienceId);
  };
  const handleAddProjectDescription = (projectId) => {
    handleAddDescription(setProjectFields, projectId);
  };

  const defaultSummaryField = {
    value:
      "What's the one thing that makes you the best candidate for this job",
  };
  const handleAddSummaryField = () =>
    handleAddField(setSummaryFields, defaultSummaryField);

  // For Education
  const defaultEducationField = {
    university: "University",
    degree: "Degree and Field of Study",
    cgpa: "CGPA",
    date: "Date Period",
  };
  const handleAddEducationField = () =>
    handleAddField(setEducationFields, defaultEducationField);

  // For Experience
  const defaultExperienceField = {
    company: "Company Name",
    title: "Title",
    date: "Date Period",
    descriptions: ["What are your achievements", "What are your achievements"],
  };
  const handleAddExperienceField = () =>
    handleAddField(setExperienceFields, defaultExperienceField);

  // For Project
  const defaultProjectField = {
    title: "Title",
    date: "Date Period",
    descriptions: ["Description 1", "Description 2"],
  };
  const handleAddProjectField = () =>
    handleAddField(setProjectFields, defaultProjectField);

  // For Skills
  const defaultSkillsField = {
    title: "Title",
    skills: ["Skill 1", "Skill 2"],
  };
  const handleAddSkillsField = () =>
    handleAddField(setSkillsFields, defaultSkillsField);

  // For Certifications
  const defaultCertificationField = {
    issueBy: "Issued By",
    name: "Certificate Name",
  };
  const handleAddCertificationField = () =>
    handleAddField(setCertificationsFields, defaultCertificationField);

  // Remove Functions
  const handleRemoveField = (setFields) => (id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };
  const handleRemoveDescription = (setFields) => (projectId, index) => {
    setFields((prevFields) =>
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
  const handleRemoveSummaryField = handleRemoveField(setSummaryFields);
  const handleRemoveEducationField = handleRemoveField(setEducationFields);
  const handleRemoveExperienceField = handleRemoveField(setExperienceFields);
  const handleRemoveExperienceDescription =
    handleRemoveDescription(setExperienceFields);
  const handleRemoveProjectField = handleRemoveField(setProjectFields);
  const handleRemoveProjectDescription =
    handleRemoveDescription(setProjectFields);
  const handleRemoveSkillsField = handleRemoveField(setSkillsFields);
  const handleRemoveCertificationField = handleRemoveField(
    setCertificationsFields
  );

  // console.log(JSON.parse(localStorage.getItem("summaryFields")));
  // useEffect(() => {
  //   localStorage.setItem("summaryFields", JSON.stringify(summaryFields));
  // }, [summaryFields]);

  return (
    <Box
      sx={{
        backgroundColor: "#19192F",
        padding: "50px 10px",
        display: "flex",
        justifyContent: "space-between",
        // maxWidth: "1440px",
        // gap: "20px",
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

          <Box>
            {userDetails.map((field) => (
              <TextField
                key={field.id}
                label={field.label}
                variant="outlined"
                type={field.type}
                onChange={(e) =>
                  handlePersonalFieldChange(
                    field.id,
                    e.target.value,
                    "userDetails"
                  )
                }
                sx={{
                  mt: "10px",
                  width: "350px",
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
            ))}
          </Box>

          {profileFields.map((field) => (
            <Stack key={field.id} direction="row" alignItems="center">
              <TextField
                label={field.label}
                variant="outlined"
                type="text"
                onChange={(e) =>
                  handlePersonalFieldChange(field.id, e.target.value, "profile")
                }
                // value={field.value}
                sx={{
                  mt: "20px",
                  width: "350px",
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
                  mt: "20px",
                  color: "white",
                  height: "40px",
                  cursor: "pointer",
                }}
              />
            </Stack>
          ))}

          {profileFields.length !== 7 && (
            <Button
              variant="contained"
              onClick={handleAddInfoField}
              sx={{
                color: "white",
                textTransform: "none",
                background:
                  "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                borderRadius: "5px",
                mt: "15px",
                fontSize: "3vmin",
              }}
            >
              Add Another Field
            </Button>
          )}
        </Box>

        {/* Summary Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Summary
          </Typography>

          {summaryFields.map((field) => (
            <Stack key={field.id} direction="row" alignItems="center">
              <TextField
                label="What's the one thing that makes you best candidate"
                variant="outlined"
                multiline
                maxRows={5}
                type="text"
                onChange={(e) =>
                  handleChange(field.id, e.target.value, "value")
                }
                // value={field.value}
                sx={{
                  mt: "20px",
                  width: "500px",
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
                onClick={() => handleRemoveSummaryField(field.id)}
                sx={{
                  width: "40px",
                  mt: "20px",
                  color: "white",
                  height: "40px",
                  cursor: "pointer",
                }}
              />
            </Stack>
          ))}

          <Button onClick={handleAddSummaryField}>Add Paragraph</Button>
        </Box>

        {/* Education Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Education
          </Typography>

          {educationFields.map((field) => (
            <React.Fragment key={field.id}>
              <Stack spacing={2} sx={{ mt: "30px" }}>
                <Stack direction="row" spacing={5}>
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
                      width: "300px",
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
                      width: "300px",
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
                </Stack>
                <Stack direction="row" spacing={5}>
                  {field.showCGPA && (
                    <Stack direction="row" alignItems="center">
                      <TextField
                        label="CGPA"
                        variant="outlined"
                        multiline
                        maxRows={5}
                        type="text"
                        onChange={(e) =>
                          handleEducationChange(
                            field.id,
                            e.target.value,
                            "cgpa"
                          )
                        }
                        // value={field.value}
                        sx={{
                          width: "300px",
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
                    </Stack>
                  )}
                  <TextField
                    label="Date"
                    type="text"
                    variant="outlined"
                    onChange={(e) =>
                      handleEducationChange(field.id, e.target.value, "date")
                    }
                    sx={{
                      width: "300px",
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
                </Stack>
              </Stack>

              <Stack direction="row" alignItems="center" sx={{ mt: "10px" }}>
                <Button onClick={() => toggle(field.id, "showCGPA")}>
                  Show CGPA
                </Button>
                <Delete
                  onClick={() => handleRemoveEducationField(field.id)}
                  sx={{
                    width: "40px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
                <Button onClick={handleAddEducationField}>
                  Add Another Field
                </Button>
              </Stack>
            </React.Fragment>
          ))}
        </Box>

        {/* Experience Fields */}
        <Box>
          <Typography
            variant="h3"
            component="h3"
            sx={{ mb: "10px", color: "white" }}
          >
            Experience
          </Typography>
          {experienceFields.map((experience) => (
            <React.Fragment key={experience.id}>
              <Stack direction="row" spacing={2}>
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
                    width: "300px",
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
                    width: "300px",
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
              </Stack>
              <TextField
                label="Date"
                variant="outlined"
                type="text"
                onChange={(e) =>
                  handleExperienceChange(experience.id, e.target.value, "date")
                }
                // value={field.value}
                sx={{
                  mt: "20px",
                  width: "300px",
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
              {experience.descriptions.map((_, index) => (
                <Stack key={index} direction="row" alignItems="center">
                  <TextField
                    label="Tasks Performed"
                    variant="outlined"
                    multiline
                    maxRows={2}
                    onChange={(e) =>
                      handleExperienceDescriptionChange(
                        experience.id,
                        index,
                        e.target.value
                      )
                    }
                    sx={{
                      mt: "20px",
                      width: "550px",
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
                      mt: "20px",
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
              <Button
                onClick={() => handleRemoveExperienceField(experience.id)}
              >
                Remove Experience
              </Button>
            </React.Fragment>
          ))}
          <Button onClick={handleAddExperienceField}>
            Add Another Experience
          </Button>
        </Box>

        {/* Project Fields */}
        <Box>
          <Typography variant="h3" component="h3" sx={{ color: "white" }}>
            Projects
          </Typography>
          {projectFields.map((project) => (
            <React.Fragment key={project.id}>
              <Stack direction="row" alignItems="center">
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
                    width: "550px",
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
              </Stack>
              <Stack direction="row" alignItems="center">
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
                    width: "550px",
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
              </Stack>
              {project.descriptions.map((_, index) => (
                <Stack key={index} direction="row" alignItems="center">
                  <TextField
                    label="Description"
                    variant="outlined"
                    onChange={(e) =>
                      handleDescriptionChange(project.id, index, e.target.value)
                    }
                    sx={{
                      mt: "20px",
                      width: "550px",
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
                      handleRemoveProjectDescription(project.id, index)
                    }
                    sx={{
                      width: "40px",
                      color: "white",
                      mt: "20px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                  />
                </Stack>
              ))}
              <Button onClick={() => handleAddProjectDescription(project.id)}>
                Add Description
              </Button>
              <Button onClick={() => handleRemoveProjectField(project.id)}>
                Remove Project
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
              <Stack direction="row" alignItems="center">
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
                    width: "300px",
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
                    mt: "20px",
                    color: "white",
                    height: "40px",
                    cursor: "pointer",
                  }}
                />
              </Stack>
              <Stack direction="row" alignItems="center">
                <TextField
                  label="Skills"
                  type="text"
                  variant="outlined"
                  // value={field.skills}
                  onChange={(e) =>
                    handleSkillsChange(field.id, e.target.value, "skills")
                  }
                  sx={{
                    mt: "20px",
                    width: "300px",
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
                    mt: "20px",
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
              <Stack direction="row" alignItems="center">
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
                    width: "300px",
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
              <Stack direction="row" alignItems="center">
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
                    width: "300px",
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

        <Button onClick={handlePrint}>Print Resume</Button>
      </Stack>

      {/* RESUME DESIGN */}
      <Box
        ref={componentRef}
        sx={{
          width: "8.27in",
          height: "11.69in",
          backgroundColor: "white",
          p: "0px 20px",
          pt: "10px",
          pb: "30px",
          position: "sticky",
          top: "20px",
          overflowY: "auto",
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
            {userDetails.find((field) => field.label === "Name")?.value ||
              userDetails.find((field) => field.label === "Name")?.defaultValue}
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
            {userDetails.find((field) => field.label === "Role")?.value ||
              userDetails.find((field) => field.label === "Role")?.defaultValue}
          </Typography>
          {/* Links */}
          <Stack
            direction="row"
            justifyContent="space-evenly"
            sx={{ mt: "5px", flexWrap: "wrap", flexBasis: "1" }}
          >
            {profileFields.map((field) => (
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
        <Stack sx={{ mt: "15px" }}>
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
        <Stack sx={{ mt: "15px" }}>
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
          <Stack spacing={2}>
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
        </Stack>

        {/* Experience */}
        <Stack sx={{ mt: "20px" }}>
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
          <Stack spacing={2}>
            {experienceFields.map((experience) => (
              <Box key={experience.id}>
                <Stack direction="row" justifyContent="space-between">
                  <Box>
                    <Typography
                      component="p"
                      sx={{
                        mt: "5px",
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
        </Stack>

        {/* Projects */}
        <Stack sx={{ mt: "20px" }}>
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
          {projectFields.map((project) => (
            <Box key={project.id}>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  component="p"
                  sx={{
                    mt: "5px",
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
          ))}
        </Stack>

        {/* Skills */}
        <Stack sx={{ mt: "15px" }}>
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
        <Stack sx={{ mt: "15px" }}>
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
            <Stack key={cert.id} direction="row" spacing={5}>
              <Box sx={{ minWidth: "50px" }}>
                <Typography
                  component="p"
                  sx={{
                    mt: "5px",
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
