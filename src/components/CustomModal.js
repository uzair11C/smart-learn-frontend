import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ open, handleClose, title, content }) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog"
      open={open}
      sx={{
        ".MuiPaper-root": {
          background: "#26263A",
          color: "#FFFFFF",
          borderRadius: "15px",
        },
      }}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, color: "red", fontSize: "4vmin" }}
        id="customized-dialog-title"
      >
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography fontSize="3vmin" gutterBottom>
          {content}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            borderRadius: "12px",
            padding: "10px 15px",
            fontSize: "3vmin",
            background:
              "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
