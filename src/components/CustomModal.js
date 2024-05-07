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

const CustomModal = ({ open, handleClose, title }) => {
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
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
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
                <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CustomModal;
