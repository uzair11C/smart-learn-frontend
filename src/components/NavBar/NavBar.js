import { useState } from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: "transparent",
                color: "#FFFFFF",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    p: "15px",
                }}
            >
                <Toolbar>
                    {/** Mobile View of Header **/}
                    <MobileNav
                        anchorElNav={anchorElNav}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                    />

                    {/** Desktop View of Header **/}
                    <DesktopNav handleCloseNavMenu={handleCloseNavMenu} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
