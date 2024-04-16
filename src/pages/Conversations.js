import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Avatar } from "../components/Conversation/Avatar";
import { Delete, Error } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const Conversations = () => {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [confirmOpen, setConfirmOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/conversations/chat");
  };

  return (
    <>
      {/* Delete Confirm Modal */}
      <Modal isOpen={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <Box>
          <Box
            sx={{
              display: "flex",
              margin: { md: "0 auto", sm: "0 auto" },
              height: { md: "48px", sm: "40px" },
              width: { md: "48px", sm: "40px" },
              flexShrink: 0,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "rgb(254 226 226 / 1)",
            }}
          >
            <Error
              style={{
                height: "24px",
                width: "24px",
                color: "rgb(220 38 38 / 1)",
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: { md: "12px", sm: "10px" },
              textAlign: { md: "center", sm: "center" },
              marginLeft: { md: "0", sm: "16px" },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "black" }}>
              Delete Conversation
            </Typography>
            <div style={{ marginTop: "10px" }}>
              <Typography variant="subtitle1" sx={{ lineHeight: "20px" }}>
                Are you sure you want to delete this conversation? This action
                cannot be undone.
              </Typography>
            </div>
          </Box>
          <Box
            sx={{
              marginTop: { md: "20px", sm: "16px" },
              display: "flex",
              flexDirection: "row-reverse",
              columnGap: "1.5rem",
            }}
          >
            <Button
              variant="text"
              sx={{
                padding: "8px 12px",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 600,
                color: "white",
                textTransform: "capitalize",
                backgroundColor: "rgb(244 63 94 / 1)",
                ":hover": { backgroundColor: "rgb(225 29 72 / 1)" },
                ":focus-visible": {
                  outlineColor: "#e11d48",
                  outlineStyle: "solid",
                  outlineWidth: "2px",
                  outlineOffset: "2px",
                },
              }}
            >
              Delete
            </Button>
            <Button
              sx={{
                padding: "8px 12px",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 600,
                color: "rgb(17 24 39 / 1)",
                textTransform: "capitalize",
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
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
              variant={mdScreen ? "h3" : "h4"}
              sx={{
                textAlign: "center",
                fontWeight: "900",
                marginBottom: "10px",
              }}
            >
              Conversations
            </Typography>
            <List>
              <ListItem
                onClick={handleClick}
                alignItems="flex-start"
                sx={{
                  gap: { md: "20px", xs: "10px" },
                  marginBottom: { md: "10px", sm: "10px", xs: "10px" },
                  justifyContent: "center",
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: " backgroundColor 0.3s",
                  ":hover": {
                    background:
                      "url('/public/images/Card.png'), linear-gradient(-253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
                  },
                }}
              >
                <Avatar />
                <ListItemText
                  primary="Moeed Rafi"
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "block", marginTop: "10px" }}
                        component="span"
                        variant="body2"
                        color="gray"
                      >
                        I'll be in your neighborhood doing errands
                      </Typography>
                    </>
                  }
                />
                <Delete
                  onClick={() => setConfirmOpen(true)}
                  sx={{
                    alignSelf: "center",
                    cursor: "pointer",
                    color: "#ff8d85",
                    transition: "opacity 0.3s",
                    ":hover": {
                      opacity: "0.5",
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </div>
      </Sidebar>
    </>
  );
};

export default Conversations;
