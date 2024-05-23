import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    Slide,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CustomModal = ({
    open,
    handleClose,
    title,
    content,
    refresh,
    storeMessages,
}) => {
    const ClearChat = async () => {
        // deleteMessages();
        await storeMessages([]);
        localStorage.removeItem("messages");
        await window.location.reload();
    };

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog"
            TransitionComponent={Transition}
            open={open}
            sx={{
                // display: "flex",
                // flexDirection
                ".MuiPaper-root": {
                    background: "#26263A",
                    color: "#FFFFFF",
                    borderRadius: "15px",
                    minWidth: "25%",
                    minHeight: "30%",
                },
            }}
        >
            <DialogTitle
                sx={{
                    m: 0,
                    p: "2% 7%",
                    color: title === "Error" ? "red" : "#FFFFFF",
                    fontSize: "4vmin",
                }}
                id="customized-dialog-title"
            >
                {title}
            </DialogTitle>
            <Divider
                variant="fullWidth"
                sx={{ background: "rgba(226,226,226,0.14)", height: "1px" }}
            />
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    right: 20,
                    top: 15,
                    color: "rgba(226,226,226,0.14)",
                    background: "#313245",
                    p: "1%",
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent sx={{ p: "5% 7%" }}>
                <Typography fontSize="3vmin">{content}</Typography>
            </DialogContent>
            <DialogActions
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                    p: "7% 5%",
                }}
            >
                {refresh ? (
                    <Button
                        onClick={ClearChat}
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            borderRadius: "5px",
                            padding: "1% 6%",
                            fontSize: "3vmin",
                            background:
                                "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                        }}
                    >
                        Refresh
                    </Button>
                ) : null}
                <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        borderRadius: "5px",
                        padding: "1% 6%",
                        fontSize: "3vmin",
                        background:
                            "linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
                    }}
                >
                    Okay
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CustomModal;
