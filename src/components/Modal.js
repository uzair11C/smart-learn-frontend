import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <>
      {isOpen ? (
        <React.Fragment>
          <div style={{ position: "relative", zIndex: "50" }} onClick={onClose}>
            <React.Fragment>
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgb(107 114 128 / 1)",
                  opacity: 0.75,
                  transitionProperty: "opacity",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "150ms",
                }}
              />
            </React.Fragment>

            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 10,
                overflowY: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  minHeight: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: { md: "16px", sm: "0" },
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    transform:
                      "transform: translate(20px, 30px) rotate(45deg) skewX(30deg) skewY(20deg) scaleX(1.5) scaleY(0.8)",
                    textAlign: "left",
                    overflow: "hidden",
                    borderRadius: "8px",
                    backgroundColor: "rgb(107 114 128 / 1)",
                    // width: "100%",
                    margin: { md: "2rem", sm: "2rem" },
                    padding: { md: "1rem", sm: "1.5rem" },
                    maxWidth: "32rem",
                    transitionProperty: "all",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "150ms",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      display: { md: "none", sm: "block" },
                      paddingTop: "1rem",
                      paddingRight: "1rem",
                      zIndex: 10,
                    }}
                  >
                    <IconButton
                      onClick={onClose}
                      sx={{
                        borderRadius: "6px",
                        backgroundColor: "rgb(255 255 255 / 1)",
                      }}
                    >
                      <CloseIcon style={{ height: "24px", width: "24px" }} />
                    </IconButton>
                  </div>
                  {children}
                </Box>
              </Box>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </>
  );
};

export default Modal;
