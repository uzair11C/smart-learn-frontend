import { useState } from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useEffect } from "react";
import { useUser } from "../../Contexts/useUser";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { user, logout } = useUser();

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [scrolledPastSection, setScrolledPastSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionHeight = window.innerHeight - 500;
            const scrollPosition = window.scrollY;

            // Check if the user has scrolled past the section
            if (scrollPosition > sectionHeight) {
                setScrolledPastSection(true);
            } else {
                setScrolledPastSection(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // const backgroundColor = ""

    return (
        <AppBar
            position="fixed"
            sx={{
                background: scrolledPastSection ? "#19192F" : "transparent",
                color: "#FFFFFF",
                boxShadow: "none",
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
                        navigate={navigate}
                        user={user}
                        logout={logout}
                    />

                    {/** Desktop View of Header **/}
                    <DesktopNav
                        handleCloseNavMenu={handleCloseNavMenu}
                        navigate={navigate}
                        user={user}
                        logout={logout}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
