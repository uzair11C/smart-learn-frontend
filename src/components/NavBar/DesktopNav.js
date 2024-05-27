import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const DesktopNav = ({ handleCloseNavMenu, user, logout, navigate }) => {
  // const { logout } = useUser();

  const handleLogin = () => {
    user && user.id ? logout() : navigate("/login");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src="/images/SmartLearn_Logo.png"
        alt="logo"
        style={{
          mr: 2,
          display: { xs: "none", md: "flex" },
        }}
        width="250"
      />
      <Box
        sx={{
          width: "70%",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            pl: "10px",
            pr: "30px",
            height: "90px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              display: "block",
              margin: "10px",
              textDecoration: "none",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to="/"
            >
              Home
            </Link>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              display: "block",
              margin: "10px",
              textDecoration: "none",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
              }}
              to="/roadmaps"
            >
              Roadmaps
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "block",
              margin: "10px",
              textDecoration: "none",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
              }}
              to="/resume-analysis"
            >
              Resume Analysis
            </Link>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              display: "block",
              margin: "10px",
              textDecoration: "none",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
              }}
              to="/consultation"
            >
              Consultation
            </Link>
          </Typography>

          {user?.id && (
            // <Link to="/profile">
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
                borderRadius: "50px",
              }}
              alt={`${user?.user_metadata.full_name} Photo`}
              src={user?.user_metadata.avatar_url || "/images/placeholder.jpg"}
            />
          )}

          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              textTransform: "none",
              background:
                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
              borderRadius: "8px",
              fontSize: "20px",
              pl: "30px",
              pr: "30px",
            }}
          >
            {user?.id ? "Logout" : "Login"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopNav;
