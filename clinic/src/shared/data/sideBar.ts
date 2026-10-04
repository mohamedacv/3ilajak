import {
    BellDot, CircleUserRound,
    ClipboardClock, LayoutDashboard, Settings, Sheet, ShieldCogCorner,
    SquarePlus, User, UserStar
} from "@/assets/icons/icons";
import { ClipboardList } from "lucide-react";


export const menus = [
    {
        icon: LayoutDashboard,
        name: "Dashboard Home",
        link: "/",
    },
    {
        icon: ClipboardClock,
        name: "Appointments",
        link: "/dashboard/appointments",
    },
    {
        icon: User,
        name: "Patients",
        link: "/dashboard/patients",
    },
    {
        icon: Sheet,
        name: "Doctors",
        link: "/dashboard/doctors",
    },
    {
        icon: ClipboardList,
        name: "Report",
        link: "/dashboard/report",
    },

    {
        icon: CircleUserRound,
        name: "Profile",
        link: "/dashboard/profile",
    },
    {
        icon: Settings,
        name: "Settings",
        link: "/dashboard/settings",
    },
];
