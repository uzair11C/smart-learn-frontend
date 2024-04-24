import React from "react";
import { Box, InputBase, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SendIcon from "@mui/icons-material/Send";

export const Form = () => {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        padding: "1rem",
        borderTopWidth: "1px",
        // backgroundColor: "rgb(255 255 255 / 1)",
        display: "flex",
        alignItems: "center",
        gap: lgScreen ? "1rem" : "0.5rem",
        width: "100%",
      }}
    >
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: lgScreen ? "1rem" : "0.5rem",
          width: "100%",
        }}
      >
        <div style={{ position: "relative", width: "80%" }}>
          <InputBase
            placeholder="Enter a Message"
            sx={{
              backgroundColor: "#222141",
              border: "none",
              color: "white",
              fontWeight: "300",
              padding: "0.75rem",
              width: "100%",
              borderRadius: "12px",
              outline: "none",
            }}
          />
        </div>
        <Button
          variant="contained"
          style={{
            borderRadius: "12px",
            padding: "0.5rem",
            background:
              "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
          }}
        >
          <SendIcon style={{ width: "30px", height: "30px" }} />
        </Button>
      </form>
    </Box>
  );
};
