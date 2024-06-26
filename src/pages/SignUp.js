import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useUser } from "../Contexts/useUser";
import Loader2 from "../components/Loader2";

const SignUp = () => {
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const isSmallScreen = window.innerWidth < 600;

    const navigate = useNavigate();
    const {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        signUp,
        loginOAuth,
        user,
    } = useUser();

    function isValidEmail(text) {
        // Regular expression pattern for validating email addresses
        const emailPattern =
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

        // Test if the text matches the email pattern
        return emailPattern.test(text);
    }

    const handleSignUp = () => {
        setOpen(true);
        try {
            if (!name || !email || !password) {
                setError("Please provide all required information");
                return;
            }

            if (name === "") {
                setOpen(false);
                setError("Please enter a name.");
            } else if (!isValidEmail(email)) {
                setOpen(false);
                setError("Please enter a valid email.");
            } else if (password.length < 6) {
                setOpen(false);
                setError("Password should have minimum 6 characters.");
            } else {
                signUp();
                setOpen(false);
                navigate("/");
            }
        } catch (error) {
            console.log("error in signup: ", error);
            setError(error.message);
        }
    };

    useEffect(() => {
        console.log("current logged in user: ", user);
        if (user?.id) {
            navigate("/");
        }
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                background: "#19192F",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    background:
                        "url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
                    backdropFilter: "blur(25px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    p: "30px 50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "stretch",
                    width: { xs: "60%", md: "25%", lg: "20%" },
                    gap: "30px",
                }}
            >
                <Typography
                    variant="h2"
                    component="h3"
                    fontWeight="bold"
                    fontSize="8vmin"
                >
                    Sign Up
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "stretch",
                    }}
                >
                    <Typography variant="h5" component="h5" fontSize="4vmin">
                        Name:
                    </Typography>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        type="text"
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                            mt: "10px",
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

                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ mt: "20px" }}
                        fontSize="4vmin"
                    >
                        Email:
                    </Typography>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            mt: "10px",
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

                    <Typography variant="h5" component="h5" sx={{ mt: "20px" }}>
                        Password:
                    </Typography>
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        size="small"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            mt: "10px",
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

                    {error && (
                        <Alert
                            severity="error"
                            variant="filled"
                            sx={{ mt: "25px" }}
                        >
                            {error}
                        </Alert>
                    )}

                    <Button
                        variant="contained"
                        onClick={handleSignUp}
                        sx={{
                            textTransform: "none",
                            background:
                                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                            borderRadius: "5px",
                            mt: "20px",
                            fontSize: "3vmin",
                        }}
                    >
                        Sign Up
                    </Button>

                    <Button
                        onClick={() => loginOAuth("google")}
                        fullWidth
                        variant="contained"
                        sx={{
                            background: "#4285F4",
                            transition: "background-color 0.3s ease",
                            // ":hover": {
                            //     background:
                            //         "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                            // },
                            mt: "20px",
                            textTransform: "none",
                            fontSize: "3vmin",
                            gap: 1,
                        }}
                    >
                        <GoogleIcon /> Login with Google
                    </Button>
                    {/* <Stack direction="row" spacing={2} sx={{ mt: "20px" }}>
                        <Button
                            onClick={() => loginOAuth("github")}
                            fullWidth
                            variant="contained"
                            sx={{
                                background: "#333",
                                transition: "background-color 0.3s ease",
                                ":hover": {
                                    background:
                                        "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                                },
                            }}
                        >
                            <GitHubIcon />
                        </Button>
                    </Stack> */}

                    <Typography
                        variant={isSmallScreen ? "subtitle2" : "subtitle1"}
                        component="p"
                        sx={{
                            mt: "20px",
                            textDecoration: "underline",
                            color: "#E717AF",
                        }}
                    >
                        <Link to="/login" style={{ color: "inherit" }}>
                            Already have an account? Log In!
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Loader2 open={open} />
        </Box>
    );
};

export default SignUp;
