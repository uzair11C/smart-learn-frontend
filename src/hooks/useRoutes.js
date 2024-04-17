import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
    Home,
    CalendarMonth,
    QuestionAnswer,
    Settings,
} from "@mui/icons-material";

const useRoutes = () => {
    const { pathname } = useLocation();

    const routes = useMemo(
        () => [
            {
                label: "Dashboard",
                href: "/dashboard/",
                icon: Home,
            },
            {
                icon: CalendarMonth,
                label: "Schedules",
                href: "/schedule",
                active: pathname === "/schedule",
            },
            {
                icon: QuestionAnswer,
                label: "Messages",
                href: "/conversations",
                active: pathname === "/conversations",
            },
            {
                icon: Settings,
                label: "Settings",
                href: "/settings",
                active: pathname === "/settings",
            },
        ],
        [pathname]
    );

    return routes;
};

export default useRoutes;
