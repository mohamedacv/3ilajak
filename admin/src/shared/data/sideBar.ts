import {
    BellDot, CircleUserRound,
    ClipboardClock, LayoutDashboard, Settings, Sheet, ShieldCogCorner,
    SquarePlus, User, UserStar
} from "@/assets/icon/icons";


export const menus = [
    {
        icon: LayoutDashboard,
        name: "Dashboard Home",
        link: "/",
    },
    {
        icon: ShieldCogCorner,
        name: "Admins",
        link: "/dashboard/admins",
    },
    {
        icon: UserStar,
        name: "Clinic Admins",
        link: "/dashboard/clinic-admins",
    },
    {
        icon: SquarePlus,
        name: "Clinics",
        link: "/dashboard/clinics",
    },
    {
        icon: Sheet,
        name: "Doctors",
        link: "/dashboard/doctors",
    },
    {
        icon: User,
        name: "Patients",
        link: "/dashboard/patients",
    },
    {
        icon: ClipboardClock,
        name: "Appointments",
        link: "/dashboard/appointments",
    },
    {
        icon: CircleUserRound,
        name: "Profile",
        link: "/dashboard/profile",
    },
];
