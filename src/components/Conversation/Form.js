import React from "react";
import { Box, InputBase, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const Form = () => {

  return (
    <Box
      sx={{
        padding: "20px",
        borderTopWidth: "1px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
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
